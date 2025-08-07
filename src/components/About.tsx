import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About: React.FC = () => {
  const { ref, controls } = useScrollReveal();
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && (window as any).VANTA) {
      const VANTA = (window as any).VANTA;
      setVantaEffect(
        VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6c63ff,
          shininess: 50,
          waveHeight: 20,
          waveSpeed: 1,
          zoom: 0.85,
          THREE: (window as any).THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I’m Mohammed Natheem, a passionate and driven software developer
              with a recent degree in Computer Science and Engineering. I
              specialize in building responsive, user-first web applications
              using technologies like HTML, CSS, JavaScript, MongoDB,
              Express.js, React.js, and Node.js. Constantly fueled by curiosity
              and a desire to grow, I thrive on solving complex problems and
              contributing to innovative projects that push the boundaries of
              modern web development.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I'm also skilled in tools like Git, GitHub, Postman, and Canva,
              with a strong eye for crafting responsive UI/UX and implementing
              smooth animations using Framer Motion and Three.js. I’m actively
              seeking a full-time opportunity as a fresher to contribute my
              skills, grow in a collaborative environment, and evolve into a
              well-rounded software professional.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                What I Do
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Frontend Development with HTML,CSS,Javascript,Bootstrap,React
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Backend Development with Node.js, java, and databases
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  UI/UX Design and responsive web development
                </li>
                
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              ref={vantaRef}
              className="w-80 h-80 mx-auto relative rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://i.ibb.co/1J7z37Vn/MY-IMAGE.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl relative z-10"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-indigo-600/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
