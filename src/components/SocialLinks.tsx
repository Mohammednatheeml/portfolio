import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Code2 as Leetcode } from 'lucide-react'; // Using Code2 as LeetCode icon

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Mohammednatheeml', color: '#333' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mohammednatheem07/', color: '#0077B5' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/natheem.l/', color: '#E4405F' },
  { name: 'LeetCode', icon: Leetcode, url: 'https://leetcode.com/u/natheemlukman/', color: '#FFA116' }, // LeetCode orange color
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 ">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all border border-white/20 hover:border-white/40"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: social.color,
              borderColor: social.color 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            aria-label={social.name}
          >
            <IconComponent className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;