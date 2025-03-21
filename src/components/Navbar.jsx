import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-10 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8 w-full">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-lg font-semibold py-2">
        <a
          href="#about"
          className="hover:text-blue-500 transition duration-300 relative text-gray-300 transform hover:scale-110"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="hover:text-green-500 transition duration-300 relative text-gray-300 transform hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-purple-500 transition duration-300 relative text-gray-300 transform hover:scale-110"
        >
          Projects
        </a>
        <a
          href="#education"
          className="hover:text-red-500 transition duration-300 relative text-gray-300 transform hover:scale-110"
        >
          Education
        </a>
      </div>

      {/* Social Media & Coding Profiles */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-2xl">
        <a
          href="https://www.linkedin.com/in/parthbhosale09/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:scale-125 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ParthBhosale123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:scale-125 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/itz_pb_09/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 hover:scale-125 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/u/Parth_Bhosale_09/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-125 transition duration-300"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.codechef.com/users/bhosaleparth09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 hover:scale-125 transition duration-300"
        >
          <SiCodechef />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
