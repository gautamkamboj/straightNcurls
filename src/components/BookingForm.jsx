import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const categories = {
    Hair: ['Haircut', 'Hair Styling', 'Hair Coloring', 'Hair Spa'],
    Skin: ['Facial', 'Waxing', 'Threading', 'Bleaching'],
    Makeup: ['Bridal Makeup', 'Party Makeup', 'HD Makeup'],
    Nails: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Nails'],
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory(''); // Reset subcategory when category changes
  };

  const handleFormSubmit = (e) => {
     e.preventDefault();
  
    const formData = {
       to_name: 'Straight N Curls', // Replace with the recipient's name
      name: e.target.name.value,
      phone: e.target.phone.value,
      category: e.target.category.value,
      subcategory: e.target.subcategory.value,
    };
  
    emailjs
      .send(
        import.meta.env.VITE_mailjs_service_id, // Replace with your EmailJS Service ID
        import.meta.env.VITE_mailjs_template_id, // Replace with your EmailJS Template ID
        formData,
        import.meta.env.VITE_mailjs_public_key

      )
      .then(
        (result) => {
          console.log(result.text);
         
          setSuccessMessage('Thank you! We will contact you shortly.'); // Show success message

          // Clear the form
          e.target.reset();

          // Hide success message after 3 seconds
          // setTimeout(() => setSuccessMessage(''), 3000);
          window.location.href = '#home'; // Redirect to landing page
          location.reload();

        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <form
        className="bg-white shadow-md rounded-lg p-6 space-y-4 w-96"
        onSubmit={handleFormSubmit}
      >
         <h2 className="text-xl font-bold text-center">Book Your Appointment</h2>

{successMessage && (
  <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
    {successMessage}
  </div>
)}

        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-600">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 placeholder-gray-400"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block font-medium text-gray-600">
            Category:
          </label>
          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 bg-white"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        <div>
          <label htmlFor="subcategory" className="block font-medium text-gray-600">
            Service:
          </label>
          <select
            name="subcategory"
            id="subcategory"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            required
            disabled={!selectedCategory} // Disable if no category is selected
            className={`w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700 bg-white ${
              !selectedCategory ? 'bg-gray-100 cursor-not-allowed' : ''
            }`}
          >
            <option value="" disabled>
              {selectedCategory
                ? 'Select a Subcategory'
                : 'Select a Category First'}
            </option>
            {selectedCategory &&
              categories[selectedCategory].map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          href={`#home`}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Get Enquiry
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
