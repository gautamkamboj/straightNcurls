import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" py-8">
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
        <div className="text-center py-4  text-white">
  <p className="text-gray-400">
    &copy; 2025 Straight N Curls. All rights reserved.
  </p>

  {/* Domestic Address */}
  <div className="mt-2">
    <h3 className="text-lg font-semibold text-white">Domestic Address:</h3>
    <p className="text-gray-400">
      A-70, Near Standard Bakery, Kaulagarh Rd, Rajender Nagar,
      Dehradun, Uttarakhand 248001
    </p>
    <p className="text-gray-400">Phone: +91 8598000077</p>
  </div>

  {/* Foreign Address */}
  <div className="mt-4">
    <h3 className="text-lg font-semibold text-white">International Address:</h3>
    <p className="text-gray-400">
      72 Weatherall Avenue, Cambridge, ON N3H 0C1, Canada
    </p>
    {/* <p className="text-gray-400">Phone: +1 519-000-1234</p> */}
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
