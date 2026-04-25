import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceBox() {
  return (
    <motion.div 
      layout
      className="bento-box col-span-2 bg-white"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.h3 layout="position">Experience</motion.h3>
      <motion.div style={{ marginTop:'1.5rem', display:'flex', flexDirection:'column', gap:'1.5rem' }} layout="position">
        <div>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            <strong>SPYM (2025):</strong> Motivational Interviewing
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            <strong>Govt Hospital (2023):</strong> Patient Interviews
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
