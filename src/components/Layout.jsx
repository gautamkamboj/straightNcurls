import React from 'react';
import { motion } from 'framer-motion';
import { GiScissors, GiHairStrands, GiLipstick, GiComb, GiRazor, GiHeartNecklace } from 'react-icons/gi';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const Layout = ({ children }) => {
  const floatingIcons = [
    { id: 1, Icon: GiScissors, color: 'text-pink-400', size: 'text-6xl', top: '20%', left: '10%' },
    { id: 2, Icon: GiHairStrands, color: 'text-yellow-400', size: 'text-5xl', top: '30%', left: '80%' },
    { id: 3, Icon: GiLipstick, color: 'text-red-400', size: 'text-6xl', top: '50%', left: '20%' },
    { id: 4, Icon: GiComb, color: 'text-blue-400', size: 'text-6xl', top: '25%', left: '40%' },
    { id: 5, Icon: GiRazor, color: 'text-gray-400', size: 'text-5xl', top: '70%', left: '85%' },
    { id: 6, Icon: GiHeartNecklace, color: 'text-pink-300', size: 'text-6xl', top: '15%', left: '60%' },
    { id: 7, Icon: FaCanadianMapleLeaf, color: 'text-red-500', size: 'text-6xl', top: '40%', left: '90%' },
    
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Fixed Background Icons */}
      <div className="fixed inset-0">
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
              repeatType: 'reverse',
            }}
          >
            <item.Icon />
          </motion.div>
        ))}

        {/* Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
