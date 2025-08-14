import React from 'react';

export default function Starts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
         
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold text-red-700">500+</h3>
            <p className="mt-2 text-lg text-gray-600">Premium Wines</p>
          </div>

          
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold text-red-700">25+</h3>
            <p className="mt-2 text-lg text-gray-600">Wine Regions</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold text-red-700">4.8</h3>
            <p className="mt-2 text-lg text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
      
      
      <div className="border-b border-gray-300 mt-16"></div>
      
    </section>
  );
}