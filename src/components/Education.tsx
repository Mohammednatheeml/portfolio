import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education: React.FC = () => {
  const { ref, controls } = useScrollReveal();

  const education = [
    {
      id: '1',
      institution: 'Dhanalakshmi Srinivasan College of Engineering and Technology',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      startYear: 2022,
      endYear: 2026,
      description: 'Specialized in software engineering and web technologies. Thesis on modern JavaScript frameworks and their performance implications.',
    },
    {
      id: '2',
      institution: 'ABU Matric Higher Secondary School',
      degree: 'Higher Secondary',
      field: 'Biology Maths',
      startYear: 2020,
      endYear: 2022,
      description: 'Comprehensive Study About Biology.',
    },

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 1
      }
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(99, 102, 241, 0.8)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      rotate: i % 2 === 0 ? -5 : 5
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.3)",
      transition: {
        duration: 0.3,
        yoyo: 2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="education" className="py-20 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <motion.div 
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {edu.startYear} - {edu.endYear}
                      </span>
                    </motion.div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {edu.institution}
                  </h4>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {edu.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;