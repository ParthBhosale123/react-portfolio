import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Parth Bhosale
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl text-gray-600 mt-4"
            >
              I am a{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                <Typewriter
                  words={[
                    "Front-end Developer",
                    "AI/ML Enthusiast",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mb-4 md:mb-0 flex items-center gap-x-4 my-2 max-w-xl font-light tracking-tighter"
            >
              {/* Resume Download Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Parth_Resume.pdf"
                className="relative inline-block px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-blue-500/50 hover:from-purple-500 hover:to-pink-500 transition duration-300 ease-in-out"
              >
                Download Resume
              </motion.a>

              {/* Let's Connect Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative inline-block px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-blue-500/50 hover:from-purple-500 hover:to-pink-500 transition duration-300 ease-in-out"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Parth Bhosale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
