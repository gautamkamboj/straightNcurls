import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCanadianMapleLeaf } from 'react-icons/fa';
import { GiScissors, GiHairStrands, GiLipstick, GiComb, GiRazor, GiHeartNecklace } from 'react-icons/gi';

const Hero = () => {
  const floatingIcons = [
    { id: 1, Icon: GiScissors, color: 'text-pink-400', size: 'text-6xl', top: '20%', left: '10%' },
    { id: 2, Icon: GiHairStrands, color: 'text-yellow-400', size: 'text-5xl', top: '30%', left: '80%' },
    { id: 3, Icon: GiLipstick, color: 'text-red-400', size: 'text-6xl', top: '50%', left: '20%' },
    // { id: 4, Icon: GiHairSpray, color: 'text-purple-400', size: 'text-5xl', top: '60%', left: '70%' },
    { id: 5, Icon: GiComb, color: 'text-blue-400', size: 'text-6xl', top: '25%', left: '40%' },
    { id: 6, Icon: GiRazor, color: 'text-gray-400', size: 'text-5xl', top: '70%', left: '85%' },
    { id: 7, Icon: GiHeartNecklace, color: 'text-pink-300', size: 'text-6xl', top: '15%', left: '60%' },
    { id: 8, Icon: FaCanadianMapleLeaf, color: 'text-red-500', size: 'text-6xl', top: '40%', left: '90%' },
  ];

  return (
    <section id="home" className="h-screen relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-slate-900">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background Icons Animation */}
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.color} ${item.size} opacity-40`}
          style={{ top: item.top, left: item.left }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <item.Icon />
        </motion.div>
      ))}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center flex flex-col justify-center items-center h-full px-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <FaCanadianMapleLeaf className="text-red-500 text-4xl" />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Straight & Curls
          </h1>
          <FaCanadianMapleLeaf className="text-red-500 text-4xl" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Elevate Your Style
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Experience the art of beauty and grooming at your premier Canadian salon destination.
        </p>
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
      </motion.div>
    </section>
  );
};

export default Hero;