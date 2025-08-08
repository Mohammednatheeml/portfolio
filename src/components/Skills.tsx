import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';

interface SkillProps {
  name: string;
  level: number;
  category: string;
  delay: number;
  logo?: string;
}

// Individual skill animation
const skillVariants = {
  hidden: { opacity: 0, y: 50, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};

const Skill: React.FC<SkillProps> = ({ name, level, category, delay, logo }) => {
  return (
    <motion.div
      variants={skillVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-indigo-500/50 transition-colors group shadow-xl hover:shadow-indigo-500/20"
      whileHover={{ scale: 1.08, y: -8 }}
    >
      <div className="h-20 mb-4 flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20">
          {logo ? (
            <img src={logo} alt={name} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
        {name}
      </h3>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: delay + 0.3, duration: 1 }}
        />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {category}
      </p>
    </motion.div>
  );
};

// Container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const Skills: React.FC = () => {
  const { ref, controls } = useScrollReveal();

  const skills = [
    { name: 'HTML', level: 95, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', level: 90, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', level: 75, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', level: 70, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', level: 70, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', level: 75, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', level: 80, category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', level: 80, category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Java', level: 82, category: 'Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C', level: 78, category: 'Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Postman', level: 80, category: 'Tools', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Canva', level: 95, category: 'Design', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },
    { name: 'Git', level: 90, category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', level: 95, category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Mongoose', level: 80, category: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/mongoose.svg' },
    { name: 'VS Code', level: 95, category: 'Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <Skill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              category={skill.category}
              delay={index * 0.1}
              logo={skill.logo}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm constantly learning and staying up-to-date with the latest technologies 
            and best practices in web development. Always excited to tackle new challenges 
            and expand my skill set.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
