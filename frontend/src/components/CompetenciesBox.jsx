import React from 'react';
import { motion } from 'framer-motion';

export default function CompetenciesBox() {
  const skills = ['Case History', 'MSE', 'Psychometric Testing', 'Research', 'DSM-5'];

  return (
    <motion.div 
      layout
      className="bento-box col-span-2 bg-dark"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.h3 layout="position">Core Competencies</motion.h3>
      <motion.div style={{ marginTop:'1.5rem', display: 'flex', flexWrap: 'wrap' }} layout="position">
        {skills.map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </motion.div>
    </motion.div>
  );
}
