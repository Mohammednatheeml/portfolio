import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NeonGradientBackground from './NeonGradientBackground';
import { useTheme } from '../contexts/ThemeContext';

type BackgroundType = 'neon-gradient';

const BackgroundManager: React.FC = () => {
  const { isDark } = useTheme();
  const [currentBackground] = useState<BackgroundType>('neon-gradient');

  const renderBackground = () => {
    if (currentBackground === 'neon-gradient') {
      return <NeonGradientBackground isDark ={isDark} />;
    }
    return null;
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {renderBackground()}
    </motion.div>
  );
};

export default BackgroundManager;
