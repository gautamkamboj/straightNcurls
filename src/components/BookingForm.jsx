import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'react-feather'; // For the calendar icon

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button to Open Booking Form */}
      <motion.button
        className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleForm}
      >
        <Calendar className="w-6 h-6" />
      </motion.button>

      {/* Booking Form */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-black text-white z-50 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 bg-red-600 flex items-center justify-between">
            <h2 className="text-xl font-bold">Book Appointment</h2>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={toggleForm}
              className="text-white text-xl font-bold"
            >
              &times;
            </motion.button>
          </div>

          {/* Form Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Enter your email"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-gray-400 mb-1">Service</label>
                <select id="service" className="w-full p-2 rounded bg-gray-800 text-white">
                  <option value="haircut">Haircut</option>
                  <option value="color">Color</option>
                  <option value="treatment">Hair Treatment</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-gray-400 mb-1">Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-gray-400 mb-1">Time</label>
                <input
                  type="time"
                  id="time"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-2 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookingForm;
