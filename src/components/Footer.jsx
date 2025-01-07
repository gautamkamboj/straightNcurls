import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Logo or Salon Name */}
        <div className="mb-4">
          <h2 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Straight N Curls
          </h2>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://www.facebook.com/share/19t19An2go/?mibextid=wwXIfr"
            className="text-gray-400 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/straight_n_curls/"
            className="text-gray-400 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://www.threads.net/@straight_n_curls?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            className="text-gray-400 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaThreads size={24} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500">
          &copy; 2025 Straight N Curls. All rights reserved.
          
        </p>
        <p className="text-gray-500">
        A-70,Near Standard Bakery, Kaulagarh Rd, Rajender Nagar, Dehradun, Uttarakhand 248001
        </p>
        <p className="text-gray-500">
        72 weatherall avenue, Cambridge ON N3H0C1
        </p>

      </div>
    </footer>
  );
};

export default Footer;
