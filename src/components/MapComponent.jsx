// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 30.338254792099807,
//   lng:  78.0209816564479,
// };

// const MapComponent = () => {
//   return (
//      <section id="location" className="py-20 bg-black text-white">
//     <div className="container mx-auto px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
//       <LoadScript googleMapsApiKey="AIzaSyCLIZANswxGXu_nzALNK9E6fdwtXG9na7A">
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   </section>
//   )
 
// };

// export default MapComponent;

import React from 'react';

const MapComponent = () => {
  return (
    <section id="location" className="py-20   text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
          Visit Us
        </h2>
        <div className="flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.1498838433135!2d78.02081853388908!3d30.338629625353327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299dd923a511%3A0x57ac5ee7c68f5ed9!2sStraight%20N%20Curls!5e0!3m2!1sen!2sin!4v1732345481576!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Straight N Curls Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
