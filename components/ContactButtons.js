import React from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

const ContactButtons = () => {
  return (
    <div className="mt-8 space-y-4">
      <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
        <span className="mr-2">My Portfolio</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
      
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
        <FaEnvelope className="mr-2" />
        <span>Reach Out!</span>
      </button>
      
      <p className="text-sm text-blue-200 pt-4 text-center">
        Please don't hesitate to reach out to me directly to learn more about how I can help you.
      </p>
    </div>
  );
};

export default ContactButtons;