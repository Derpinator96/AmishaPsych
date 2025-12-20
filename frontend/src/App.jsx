import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Amisha from './assets/amishahero.jpeg' 
import PixelTrail from './components/PixelTrail.jsx'

function App() {
  const [hoveredBox, setHoveredBox] = useState(null);

  const getBoxClasses = (id, defaultClasses) => {
    if (hoveredBox === id) {
      if (id === 'hero') return 'bento-box col-span-4 row-span-2 bg-blue';
      if (id === 'education') return 'bento-box align-top col-span-2 row-span-2 bg-white';
    }
    return defaultClasses;
  };

  const isHeroHovered = hoveredBox === 'hero';

  return (
    <>
      <style>{`
        /* --- GLOBAL VARIABLES --- */
        :root {
          --bg-cream: #EAE3CE; --tiger-orange: #EF8603; --burnt-tangerine: #E12D12; 
          --laser-blue: #0E5BDF; --jasmine: #FFE88E; --text-dark: #1a1a1a; --text-light: #EAE3CE;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
          background-color: var(--bg-cream); 
          color: var(--text-dark); 
          font-family: 'Inter', sans-serif;
          overflow-x: hidden; 
        }

        /* --- OVERLAY --- */
        .cursor-trail-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: 9999; pointer-events: none !important; background: transparent;
        }

        /* --- WRAPPER --- */
        .portfolio-wrapper { position: relative; z-index: 1; padding: 2rem; min-height: 100vh; }

        /* --- BENTO GRID --- */
        .bento-container {
          display: grid; 
          grid-auto-flow: dense; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 1.5rem; 
          max-width: 1200px; 
          margin: 0 auto;
        }
        
        .bento-box {
          background: white; border-radius: 24px; padding: 1.5rem; 
          display: flex; flex-direction: column; 
          justify-content: space-between; 
          border: 2px solid transparent; 
          pointer-events: auto; 
          cursor: pointer;
          overflow: hidden;
          transform-origin: center center;
          position: relative; 
        }
        
        .bento-box:hover { z-index: 20; box-shadow: 10px 10px 0 rgba(0,0,0,0.1); }

        /* --- UTILITY CLASSES --- */
        .align-top { justify-content: flex-start !important; gap: 2rem; }
        .col-span-2 { grid-column: span 2; } 
        .col-span-4 { grid-column: span 4; } 
        .row-span-2 { grid-row: span 2; }
        
        .bg-blue { background: var(--laser-blue); color: var(--text-light); }
        .bg-orange { background: var(--tiger-orange); color: var(--text-light); }
        .bg-red { background: var(--burnt-tangerine); color: var(--text-light); }
        .bg-white { background: white; border: 2px solid var(--text-dark); }
        
        /* TYPOGRAPHY */
        .hero-title { font-size: 3.5rem; font-weight: 900; line-height: 1; margin-top: 0.5rem; }
        
        .heroImage img { 
          width: clamp(200px, 28vw, 400px); 
          aspect-ratio: 4/5; 
          object-fit: cover; 
          border-radius: 20px; 
          border: 4px solid var(--text-light); 
          /* Margin handles are done in inline styles now for layout shifting */
        }
        
        .skill-tag { 
          display: inline-block; background: rgba(255,255,255,0.25); padding: 6px 14px; 
          border-radius: 20px; margin: 4px; font-weight: 600; border: 1px solid rgba(255,255,255,0.1); 
        }
        .contact-link { color: white; text-decoration: underline; font-size: 1.2rem; font-weight: bold; margin-top: auto; display: block; }
        
        /* BADGE */
        .badge {
          position: absolute; top: 1rem; right: 1rem; background: var(--jasmine); 
          color: var(--text-dark); padding: 6px 12px; border-radius: 12px; 
          font-weight: 800; font-size: 0.8rem;
          white-space: nowrap; z-index: 30; box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) { 
          .bento-container { grid-template-columns: 1fr; } 
          .hero-title { font-size: 2.5rem; }
          .col-span-4, .col-span-2 { grid-column: auto; }
        }
      `}</style>
      
      <div className="cursor-trail-overlay">
        <PixelTrail
          gridSize={12}
          trailLength={0.90}
          lag={0.2}
          color="#ef8603" 
        />
      </div>
      
      <div className="portfolio-wrapper">
        <motion.div className="bento-container" layout>
          
          {/* 1. HERO BLOCK */}
          <motion.div 
            layout 
            onMouseEnter={() => setHoveredBox('hero')}
            onMouseLeave={() => setHoveredBox(null)}
            className={getBoxClasses('hero', "bento-box col-span-2 row-span-2 bg-blue")}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div layout="position" className="badge" style={{ rotate: 5 }}>
              Open to Work
            </motion.div>
            
            {/* Header always stays at top */}
            <motion.div layout="position">
              <h3>Aspiring Clinical Psychologist</h3>
              <h1 className="hero-title">Amisha Verma</h1>
            </motion.div>

            {/* Content Container: Switches from Column to Row on hover */}
            <motion.div 
              layout 
              style={{ 
                display: 'flex', 
                flexDirection: isHeroHovered ? 'row' : 'column', // SWITCH LAYOUT
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '1rem',
                height: '100%'
              }}
            >
              {/* Image */}
              <motion.div layout="position" className="heroImage">
                <img src={Amisha} alt="Amisha" style={{ width: isHeroHovered ? '280px' : '' }} />
              </motion.div>
              
              {/* Dynamic Text Area */}
              <AnimatePresence mode="wait">
                {isHeroHovered ? (
                  /* HOVER TEXT: Big, to the right */
                  <motion.div 
                    key="big-text"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ flex: 1 }}
                  >
                    <p style={{ fontSize: '1.4rem', fontWeight: '500', lineHeight: '1.4' }}>
                      Experienced in clinical settings, psychometric assessments, and mental health awareness initiatives. 
                      Strong background in research, volunteering, and teamwork, with a passion for serving underprivileged communities.
                    </p>
                  </motion.div>
                ) : (
                  /* DEFAULT TEXT: Small, at the bottom */
                  <motion.div 
                    key="small-text"
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ marginTop: 'auto' }}
                  >
                    <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                      Dedicated psychology student pursuing a Master's in Clinical Psychology.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* 2. EDUCATION BLOCK */}
          <motion.div 
            layout
            onMouseEnter={() => setHoveredBox('education')}
            onMouseLeave={() => setHoveredBox(null)}
            className={getBoxClasses('education', "bento-box align-top row-span-2 bg-white")}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h3 layout="position">Education</motion.h3>
            <motion.div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }} layout="position">
                <div>
                  <strong style={{fontSize:'1.1rem', display:'block'}}>M.Sc. Clinical Psychology</strong>
                  <p>Christ University (Delhi NCR)</p>
                  <p style={{color:'#666', fontSize:'0.8rem'}}>2024-2026</p>
                </div>
                <div>
                  <strong style={{fontSize:'1.1rem', display:'block'}}>B.Sc. (Hons) Psychology</strong>
                  <p>Christ University (Delhi NCR)</p>
                  <p style={{color:'#666', fontSize:'0.8rem'}}>2021-2024</p>
                </div>
            </motion.div>
          </motion.div>

          {/* 3. CONTACT BLOCK */}
          <motion.div 
            layout
            className="bento-box bg-orange"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
             <motion.div layout="position"><h3>Let's Connect</h3><h2>Say Hello!</h2></motion.div>
             <motion.a href="mailto:amisha.verma2112@gmail.com" className="contact-link" layout="position">Email Me</motion.a>
          </motion.div>

          {/* 4. LEADERSHIP BLOCK */}
          <motion.div 
            layout
            className="bento-box bg-orange"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
             <motion.h3 layout="position">Leadership</motion.h3>
             <motion.div style={{marginTop:'auto'}} layout="position">
               <h2>Creative Head</h2>
               <p>Environmental Psychology Club</p>
             </motion.div>
          </motion.div>

          {/* 5. SKILLS BLOCK */}
          <motion.div 
            layout
            className="bento-box col-span-2 bg-red"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
             <h3>Core Competencies</h3>
             <div style={{marginTop:'15px'}}>
               {['Case History', 'MSE', 'Psychometric Testing', 'Research', 'DSM-5'].map(s => <span key={s} className="skill-tag">{s}</span>)}
             </div>
          </motion.div>

          {/* 6. EXPERIENCE BLOCK */}
          <motion.div 
            layout
            className="bento-box col-span-2 bg-white"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
             <h3>Experience</h3>
             <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'10px'}}>
                <p><strong>SPYM (2025):</strong> Motivational Interviewing</p>
                <p><strong>Govt Hospital (2023):</strong> Patient Interviews</p>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

export default App;