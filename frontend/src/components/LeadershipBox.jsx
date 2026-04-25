import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipBox() {
  return (
    <motion.div 
      layout
      className="bento-box bg-dark"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.h3 layout="position">Leadership</motion.h3>
      <motion.div style={{marginTop:'auto', paddingTop: '1.5rem'}} layout="position">
        <h2 style={{ fontSize: '1.6rem' }}>Creative Head</h2>
        <p style={{ opacity: 0.8 }}>Environmental Psychology Club</p>
      </motion.div>
    </motion.div>
  );
}
