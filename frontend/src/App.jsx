import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PixelTrail from './components/PixelTrail.jsx';
import HeroBox from './components/HeroBox.jsx';
import EducationBox from './components/EducationBox.jsx';
import ContactBox from './components/ContactBox.jsx';
import LeadershipBox from './components/LeadershipBox.jsx';
import CompetenciesBox from './components/CompetenciesBox.jsx';
import ExperienceBox from './components/ExperienceBox.jsx';
import './App.css';

function App() {
  const [expandedBox, setExpandedBox] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBoxClick = (id) => {
    if (isMobile) return; // Disallow expand on mobile
    setExpandedBox(prev => prev === id ? null : id);
  };

  return (
    <>
      <div className="cursor-trail-overlay">
        <PixelTrail
          gridSize={12}
          trailLength={0.90}
          lag={0.2}
          color="#D0FF5B" /* Changed to match lime green highlight */
        />
      </div>
      
      <div className="portfolio-wrapper">
        <motion.div className="bento-container" layout>
          
          <HeroBox 
            isExpanded={expandedBox === 'hero'} 
            onClick={() => handleBoxClick('hero')} 
            isMobile={isMobile}
          />

          <EducationBox 
            isExpanded={expandedBox === 'education'} 
            onClick={() => handleBoxClick('education')} 
            isMobile={isMobile}
          />

          <ContactBox />

          <LeadershipBox />

          <CompetenciesBox />

          <ExperienceBox />

        </motion.div>
      </div>
    </>
  );
}

export default App;