import React, { useEffect, useRef } from 'react';
import './PixelTrail.css';

const PixelTrail = ({
  gridSize = 12,       // Pixel size
  trailLength = 0.90,  // Fade speed
  color = '#ef8603',   // Tiger Orange
  backgroundColor = 'transparent',
  lag = 0.2            // 0.1 = lazy/slow trail, 0.9 = instant/fast trail
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  // Target position (Where your mouse is)
  const mouseRef = useRef({ x: 0, y: 0 });
  // Current Trail position (Where the drawing is)
  const trailRef = useRef({ x: 0, y: 0 });
  // Previous frame position (To connect lines)
  const prevTrailRef = useRef({ x: 0, y: 0 });
  
  const gridRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      // Initialize Grid
      const newGrid = [];
      for (let i = 0; i < cols * rows; i++) {
        newGrid.push(0); 
      }
      gridRef.current = { data: newGrid, cols, rows };

      // Reset positions to avoid a line jumping from 0,0 on resize
      // We don't have access to current mouse here easily, but that's fine
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    // Helper: Activate a specific grid cell
    const activatePixel = (x, y, data, cols, rows) => {
      const col = Math.floor(x / gridSize);
      const row = Math.floor(y / gridSize);
      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        data[row * cols + col] = 1; // Set alpha to 1
      }
    };

    // Helper: Draw line between two points to fill gaps
    const interpolateLine = (x0, y0, x1, y1, data, cols, rows) => {
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = (x0 < x1) ? 1 : -1;
      const sy = (y0 < y1) ? 1 : -1;
      let err = dx - dy;

      while (true) {
        activatePixel(x0, y0, data, cols, rows);
        if (Math.abs(x0 - x1) < gridSize && Math.abs(y0 - y1) < gridSize) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x0 += sx; }
        if (e2 < dx) { err += dx; y0 += sy; }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      const { data, cols, rows } = gridRef.current;
      
      // 1. Move Trail towards Mouse (Lerp)
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      
      trailRef.current.x += (targetX - trailRef.current.x) * lag;
      trailRef.current.y += (targetY - trailRef.current.y) * lag;

      // 2. Draw line from previous frame position to current frame position
      // This ensures we don't get gaps when moving fast
      interpolateLine(
        prevTrailRef.current.x, prevTrailRef.current.y,
        trailRef.current.x, trailRef.current.y,
        data, cols, rows
      );

      // Save current pos for next frame
      prevTrailRef.current.x = trailRef.current.x;
      prevTrailRef.current.y = trailRef.current.y;

      // 3. Render and Fade
      for (let i = 0; i < data.length; i++) {
        // Fade out
        data[i] *= trailLength;

        if (data[i] > 0.05) {
          ctx.globalAlpha = data[i];
          ctx.fillStyle = color;
          
          const col = i % cols;
          const row = Math.floor(i / cols);
          
          ctx.fillRect(col * gridSize, row * gridSize, gridSize, gridSize);
        }
      }
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', initGrid);
    window.addEventListener('mousemove', handleMouseMove);
    initGrid();
    
    // Init trail position to prevent initial jump line
    // We assume center or 0,0 until mouse moves
    trailRef.current = { x: 0, y: 0 };
    prevTrailRef.current = { x: 0, y: 0 };

    draw();

    return () => {
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gridSize, trailLength, color, backgroundColor, lag]);

  return (
    <canvas 
      ref={canvasRef} 
      className="pixel-canvas"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default PixelTrail;