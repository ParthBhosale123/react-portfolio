import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-10 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8 w-full">
      
      {/* Resume Download Button */}
      <div className="mb-4 md:mb-0">
        <a
          href="/resume.pdf"
          download="Parth_Resume.pdf"
          className="relative inline-block px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-blue-500/50 hover:from-purple-500 hover:to-pink-500 transition duration-300 ease-in-out"
        >
          Download Resume
        </a>
      </div>

       {/* Social Media & Coding Profiles */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-2xl">
        <a href="https://www.linkedin.com/in/parthbhosale09/" target="_blank" rel="noopener noreferrer"
          className="hover:text-blue-500 hover:scale-125 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ParthBhosale123" target="_blank" rel="noopener noreferrer"
          className="hover:text-gray-700 hover:scale-125 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/itz_pb_09/?hl=en" target="_blank" rel="noopener noreferrer"
          className="hover:text-pink-500 hover:scale-125 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://leetcode.com/u/Parth_Bhosale_09/" target="_blank" rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-125 transition duration-300">
          <SiLeetcode />
        </a>
        <a href="https://www.codechef.com/users/bhosaleparth09" target="_blank" rel="noopener noreferrer"
          className="hover:text-orange-500 hover:scale-125 transition duration-300">
          <SiCodechef />
        </a>
      </div>
      
    </nav>
  )
}

export default Navbar;
