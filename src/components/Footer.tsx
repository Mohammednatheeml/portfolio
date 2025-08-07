import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Debugging check
  console.log('Footer component rendering');
  
  return (
    <motion.footer
      className="relative w-full py-6 mt-12 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: 'block' // Force display
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p
            className="text-white text-sm md:text-base"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px rgba(255,255,255,0.5)"
            }}
          >
            2025 © Mohammed Natheem - All Rights Reserved
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;