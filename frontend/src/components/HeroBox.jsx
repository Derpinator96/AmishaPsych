import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Amisha from '../assets/newhero.jpeg';

export default function HeroBox({ isExpanded, onClick, isMobile }) {
  // Disable expansion on mobile entirely.
  const expanded = !isMobile && isExpanded;

  const defaultClasses = "bento-box col-span-2 row-span-2 bg-lime";
  const expandedClasses = "bento-box col-span-4 row-span-2 bg-lime";
  const className = expanded ? expandedClasses : defaultClasses;

  return (
    <motion.div 
      layout 
      onClick={isMobile ? undefined : onClick}
      className={className}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ cursor: isMobile ? 'default' : 'pointer' }}
    >
      <motion.div layout="position" className="badge" style={{ rotate: 5 }}>
        Open to Work
      </motion.div>
      
      <motion.div layout="position">
        <h3>Aspiring Clinical Psychologist</h3>
        <h1 className="hero-title">Amisha Verma</h1>
      </motion.div>

      <motion.div 
        layout 
        style={{ 
          display: 'flex', 
          flexDirection: expanded ? 'row' : 'column',
          alignItems: expanded ? 'center' : 'flex-start',
          justifyContent: expanded ? 'center' : 'flex-start',
          gap: '2rem',
          marginTop: '1.5rem',
          height: '100%'
        }}
      >
        <motion.div layout="position" className="heroImage" style={{ alignSelf: expanded ? 'center' : 'flex-start' }}>
          <motion.img 
            src={Amisha} 
            alt="Amisha" 
            layout="position"
            style={{ width: expanded ? '280px' : '100%', maxWidth: '350px' }} 
          />
        </motion.div>
        
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div 
              key="big-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              style={{ flex: 1 }}
            >
              <p style={{ fontSize: '1.4rem', fontWeight: '500', lineHeight: '1.5' }}>
                Experienced in clinical settings, psychometric assessments, and mental health awareness initiatives. 
                Strong background in research, volunteering, and teamwork, with a passion for serving underprivileged communities.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key="small-text"
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ marginTop: expanded ? '0' : 'auto' }}
            >
              <p style={{ fontSize: '1.1rem' }}>
                Dedicated psychology student pursuing a Master's in Clinical Psychology.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
