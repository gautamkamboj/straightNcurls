import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaSpa, FaPaintBrush, FaGem, FaHeart } from 'react-icons/fa';

const services = [
 
  {
    category: "Hair",
    icon: <FaCut className="text-red-600 w-8 h-8" />,
    image: "/images/haircut.jpg",
    items: [
      { name: "Haircut", },
      { name: "Hair and Scalp Treatment",  },
      { name: "Global Hair Color", },
      { name: "Keratin",},
      { name: "Botox",},
      { name: "Kerasmooth",},
    ],
  },
  {
    category: "Skin",
    icon: <FaSpa className="text-red-600 w-8 h-8" />,
    image: "/images/facial.jpg",
    items: [
      { name: "Facial",},
      { name: "Waxing",},
      { name: "Body Polishing",},
      { name: "Clean Up",},
      { name: "Hydra Facial",},
      { name: "Face Waxing",},
    ],
  },
  {
    category: "Makeup",
    icon: <FaPaintBrush className="text-red-600 w-8 h-8" />,
    image: "/images/makeup.jpg",
    items: [
      { name: "Bridal Makeup" },
      { name: "Party Makeup", },
      { name: "Engagement Makeup",},
      { name: "Airbrush Makeup",},
      { name: "Groom Makeup",},
      { name: "HD Makeup",},
    ],
  },
  {
    category: "Nails & Lashes",
    icon: <FaGem className="text-red-600 w-8 h-8" />,
    image: "/images/nails.jpg",
    items: [
      { name: "Acrylic Nails",},
      { name: "Gel Extensions",},
      { name: "Nail Art",},
      { name: "Eyelashes Extensions",},
      { name: "3D Microblading",},
      { name: "Ombre Microblading",},
      
    ],
  },
  {
    category: "Pre-Bridal Packages",
    icon: <FaHeart className="text-red-600 w-8 h-8" />,
    image: "/images/bridal.jpg",
    items: [
      { name: "Classic Pre Bridal",  },
      { name: "Premium Pre Bridal",  },
      { name: "Signature Pre Bridal",},
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serviceCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={serviceCategory.image}
                alt={serviceCategory.category}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />

              {/* Icon and Category Name */}
              <div className="relative z-10 mb-4 flex items-center gap-2">
                {serviceCategory.icon}
                <h3 className="text-2xl font-bold text-red-600">
                  {serviceCategory.category}
                </h3>
              </div>

              {/* Services List */}
              <ul className="relative z-10 space-y-2">
                {serviceCategory.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-700 pb-2"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-400">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
