import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCanadianMapleLeaf } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-6">
        <FaCanadianMapleLeaf className="text-red-500 text-4xl" />
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Straight & Curls
        </h1>
        <FaCanadianMapleLeaf className="text-red-500 text-4xl" />
      </div>

      {/* Subtitle */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Elevate Your Style
      </h2>
      <p className="text-xl text-gray-200 mb-8 max-w-2xl">
        Experience the art of beauty and grooming at your premier Canadian salon destination.
      </p>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918598000077?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center gap-2"
      >
        <FaWhatsapp className="text-xl" />
        Book Now
      </motion.a>
    </section>
  );
};

export default Hero;
