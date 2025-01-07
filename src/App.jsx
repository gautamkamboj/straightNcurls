import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import GalleryCarousel from './components/GalleryCarousel';
import MapComponent from './components/MapComponent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <GalleryCarousel />
      <MapComponent />
      <Footer />
    </div>
  );
};

export default App;
