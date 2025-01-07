import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed w-full bg-white bg-opacity-50 shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-red-600"
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="w-40 h-auto mx-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="text-black hover:text-red-600 hover:underline relative"
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-red-600"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          
          {/* Phone Number for Desktop */}
          <motion.a
            href="tel:+918598000077"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            <FaPhone className="animate-pulse" />
            <span>+91 8598000077</span>
          </motion.a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Phone Number for Mobile */}
          <motion.a
            href="tel:+918598000077"
            whileHover={{ scale: 1.1 }}
            className="flex items-center text-red-600"
          >
            <FaPhone className="animate-pulse" />
          </motion.a>
          
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            className="text-black text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="md:hidden bg-white bg-opacity-95 shadow-md z-50"
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-red-600 hover:underline"
              >
                {item}
              </motion.a>
            ))}
            {/* Full Phone Number in Mobile Menu */}
            <motion.a
              href="tel:+918598000077"
              whileHover={{ scale: 1.1 }}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-red-600"
            >
              <FaPhone />
              <span>+91 8598000077</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;