import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="pt-5 relative">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col items-center space-y-6 tracking-tighter">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-3 text-lg text-gray-400"
          >
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>Pune, Maharashtra, India</span>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-3"
          >
            <FaPhoneAlt className="text-green-500 text-xl" />
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:+91 7709423322"
              className="text-lg text-blue-600 hover:underline"
            >
              +91 7709423322
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-3"
          >
            <FaEnvelope className="text-yellow-500 text-xl" />
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:parthb00009@gmail.com"
              className="text-lg text-blue-600 hover:underline"
            >
              parthb00009@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 p-3 bg-cyan-500 text-white rounded-full shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </section>
  );
};

export default Contact;
