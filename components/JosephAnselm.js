import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Stats from './Stats';
import ContactButtons from './ContactButtons';

const JosephAnselm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Hero Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-white">
              <Hero />
              <ContactButtons />
            </div>
            
            {/* Right Column - About & Stats */}
            <div className="md:w-3/5 p-8 md:p-12">
              <AboutMe />
              <div className="mt-10 pt-8 border-t border-gray-200">
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JosephAnselm;