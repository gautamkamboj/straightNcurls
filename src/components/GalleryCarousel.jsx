import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaBars } from 'react-icons/fa';

const GalleryCarousel = () => {
  const reels = [
    "https://www.instagram.com/reel/DBth0F5yme2/",
    "https://www.instagram.com/reel/DCb2A-CSF_W/",
    "https://www.instagram.com/reel/DCcPAsKuOrC/",
  ];

  useEffect(() => {
    // Function to reload Instagram embeds
    const loadInstagramEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Trigger Instagram embeds reload after rendering
    loadInstagramEmbeds();
  }, []);

  return (
    <section id="gallery" className="py-20  text-white flex flex-col items-center justify-center">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Our Instagram Reels</h2>
      </div>

      {/* Instagram Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reels.map((url, index) => (
          <div key={index} className="instagram-embed">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: '#000',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid rgb(219, 219, 219)',
                margin: '0 auto',
              }}
            ></blockquote>
          </div>
        ))}
      </div>

      {/* Instagram Link */}
      <motion.div
        className="flex items-center justify-center mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://www.instagram.com/straight_n_curls/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:bg-red-600"
        >
          <FaInstagram className="w-12 h-12" />
          <span className="text-lg font-bold">Follow Us on Instagram</span>
        </a>
      </motion.div>
    </section>
  );
};

export default GalleryCarousel;


// import React from 'react';

// const GalleryCarousel = () => {
//   const reels = [
//     "https://www.instagram.com/reel/DBth0F5yme2/", // Replace with your reel URLs
//     "https://www.instagram.com/reel/DCb2A-CSF_W/",
//      "https://www.instagram.com/reel/DCcPAsKuOrC/",
//   ];

//   return (
    
//     <section id="gallery" className="py-20 bg-black text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
//           Our Instagram Reels
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reels.map((url, index) => (
//             <div key={index} className="w-full aspect-w-1 aspect-h-1">
//               <iframe
//                 src={`${url}embed`}
//                 className="w-full h-screen rounded-lg"
//                 allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//                 frameBorder="0"
//                 scrolling="no"
//               ></iframe>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryCarousel;

