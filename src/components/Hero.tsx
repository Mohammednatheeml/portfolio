import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Typewriter from "typewriter-effect";
import myImage from "../assets/myimage.jpg";
import resume from "../assets/resume.pdf";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const resumeUrl = resume;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Natheem_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Particle config
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 40,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center relative z-10"
      >
        {/* Profile Image */}
        <motion.img
          src={myImage}
          alt="John Doe"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl mb-6 object-cover transition-transform duration-300 hover:scale-110"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-pulse"
        >
          Mohammed Natheem L
        </motion.h1>

        {/* Title with Typewriter */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 h-10">
            <Typewriter
              options={{
                strings: ["Full Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>
          <p className="text-2xl md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As a fresher, I’m seeking a challenging developer role where I can
            apply my technical skills, adapt quickly, and contribute to building
            innovative, efficient solutions. I’m passionate about learning,
            problem-solving, and delivering clean, user-focused applications.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>

          <motion.button
            onClick={handleDownloadResume}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Arrow Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToAbout}
      >
        <ArrowDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
