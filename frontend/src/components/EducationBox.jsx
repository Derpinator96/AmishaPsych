import React from 'react';
import { motion } from 'framer-motion';

export default function EducationBox({ isExpanded, onClick, isMobile }) {
  const expanded = !isMobile && isExpanded;

  const defaultClasses = "bento-box bg-white row-span-2 align-top";
  // The original expanded code just added align-top col-span-2 row-span-2
  const expandedClasses = "bento-box bg-white row-span-3 col-span-2 align-top";
  
  const className = expanded ? expandedClasses : defaultClasses;

  return (
    <motion.div 
      layout
      onClick={isMobile ? undefined : onClick}
      className={className}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ cursor: isMobile ? 'default' : 'pointer' }}
    >
      <motion.h3 layout="position">Education</motion.h3>
      
      <motion.div style={{ display:'flex', flexDirection:'column', gap:'1.5rem', marginTop: '1rem' }} layout="position">
        <motion.div layout="position">
          <strong style={{fontSize:'1.2rem', display:'block', marginBottom: '0.2rem'}}>M.Sc. Clinical Psychology</strong>
          <p style={{ margin: 0 }}>Christ University (Delhi NCR)</p>
          <p style={{color:'#666', fontSize:'0.9rem', margin: 0}}>2024-2026</p>
        </motion.div>
        <motion.div layout="position">
          <strong style={{fontSize:'1.2rem', display:'block', marginBottom: '0.2rem'}}>B.Sc. (Hons) Psychology</strong>
          <p style={{ margin: 0 }}>Christ University (Delhi NCR)</p>
          <p style={{color:'#666', fontSize:'0.9rem', margin: 0}}>2021-2024</p>
        </motion.div>
      </motion.div>
      
      {expanded && (
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}
        >
          <p style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
            Consistently achieved top-decile grades with focused coursework on cognitive behavioral therapies, 
            developmental psychology, and advanced statistical research methods.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
