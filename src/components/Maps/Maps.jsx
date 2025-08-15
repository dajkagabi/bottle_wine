import React from 'react';
import { MapPin } from 'lucide-react';



const Map = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          

          <div className="relative md:w-1/2 bg-gray-900 text-white p-12 flex items-center justify-center">
          

            <div className="absolute inset-0 bg-map-texture opacity-30"></div>
            
            <button className="relative z-10 px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 transition-colors duration-200 flex items-center">
              <MapPin size={20} className="mr-2" />
              Interactive Map
            </button>
          </div>

     
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-gray-800">Global Wine Map</h2>
            <p className="mt-4 text-gray-600">
              Explore wine regions around the world with our interactive map. Discover climate
              zones, grape varieties, and the unique characteristics that define each terroir.
            </p>

            <div className="flex justify-around mt-8 text-center">
              <div>
                <p className="text-3xl font-bold text-gray-800">25+</p>
                <p className="text-gray-500">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">150+</p>
                <p className="text-gray-500">Regions</p>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 transition-colors duration-200">
              Launch Interactive Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;