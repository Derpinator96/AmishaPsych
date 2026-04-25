import React from 'react';
import { motion } from 'framer-motion';

export default function ContactBox() {
  return (
    <motion.div 
      layout
      className="bento-box bg-purple"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div layout="position">
        <h3>Let's Connect</h3>
        <h2>Say Hello!</h2>
      </motion.div>
      <motion.a 
        href="mailto:amisha.verma2112@gmail.com" 
        className="contact-link" 
        layout="position"
      >
        Email Me ↗
      </motion.a>
    </motion.div>
  );
}
