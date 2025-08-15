import React from 'react';
import { Play, Clock, Star } from 'lucide-react';
import chef from '../../assets/chef.jpg';

const About = () => {
  return (
    <div className="bg-gray-100 py-35">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden lg:flex">
        <div className="lg:w-1/2 relative">
          <span className="absolute top-4 left-4 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-full">
            Master Class
          </span>
          <img
            src={chef}
            alt="Chef Martinez"
            className="w-full h-full object-cover"
          />
         
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12">
          <span className="text-sm font-semibold text-orange-500 uppercase">
            Expert Course
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-800">
            Pairing Fundamentals with Chef Martinez
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Join renowned chef Isabella Martinez as she reveals the secrets behind creating perfect food and wine pairings. Learn the science, art, and intuition that goes into matching flavors.
          </p>
          <div className="mt-6 flex items-center text-gray-500 text-sm">
            <Clock className="w-5 h-5 mr-1 text-gray-400" />
            <span>2.5 hours</span>
            <span className="mx-4 text-gray-300">•</span>
            <span className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`}
                />
              ))}
            </span>
            <span className="ml-1 text-gray-500">(156 reviews)</span>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Start Masterclass
            </button>
            <button className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition duration-300">
              Preview Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;