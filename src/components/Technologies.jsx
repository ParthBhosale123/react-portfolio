import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql /* SiEclipseide */ } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="skills" className="pt-5">
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack & Skills
      </motion.h2>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/** Technology Cards **/}
        {[
          { icon: <FaJava className="text-7xl text-blue-400" />, label: "Java", duration: 2 },
          { icon: <FaHtml5 className="text-7xl text-orange-500" />, label: "HTML", duration: 2.5 },
          { icon: <FaCss3Alt className="text-7xl text-blue-500" />, label: "CSS", duration: 3 },
          { icon: <FaJs className="text-7xl text-yellow-500" />, label: "JavaScript", duration: 3.5 },
          { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: "React JS", duration: 4 },
          { icon: <SiTailwindcss className="text-7xl text-blue-300" />, label: "Tailwind CSS", duration: 4.5 },
          { icon: <SiMysql className="text-7xl text-blue-600" />, label: "MySQL", duration: 5 },
          { icon: <FaGitAlt className="text-7xl text-orange-400" />, label: "Git", duration: 5.5 },
          { icon: <FaGithub className="text-7xl text-gray-500" />, label: "GitHub", duration: 6 },
          // { icon: <SiEclipseide className="text-7xl text-indigo-500" />, label: "Eclipse", duration: 7 },
        ].map((tech, index) => (
          <motion.div 
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center w-32 min-w-[120px] border-4 border-neutral-800 p-4 rounded-2xl"
          >
            {tech.icon}
            <p className="text-center text-neutral-400 pt-3 break-words">
              {tech.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default Technologies;
