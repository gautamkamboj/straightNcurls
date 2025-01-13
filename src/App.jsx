import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import GalleryCarousel from './components/GalleryCarousel';
import MapComponent from './components/MapComponent';
import Footer from './components/Footer';
import Layout from './components/Layout';
import BookingForm from './components/BookingForm';
const App = () => {

  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#bookingform') {
      setShowBookingForm(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
    {showBookingForm && <BookingForm />}

      <Navigation />
      <Layout>
         <Hero />
        <Services />
        <GalleryCarousel />
        <MapComponent />
        <Footer />
      </Layout>
     
    </div>
  );
};

export default App;
