import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Grape, Heart } from 'lucide-react';
import featuredWineImage from '../../assets/merlot.png'; 

export default function FeaturedWines() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-700">Wine of the Month</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Each month, our sommeliers select an exceptional wine to share with you. Discover this month's featured bottle.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
          
          {/* Left Side: Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={featuredWineImage}
              alt="Featured Wine of the Month" 
              className="h-auto w-full md:w-3/4 max-h-[500px] object-contain rounded-lg shadow-md border-2 border-red-700"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Merlot Reserve</h3>
            <p className="text-lg text-gray-700">Napa Valley, California</p>
            
            <p className="text-gray-600">
              A full-bodied Merlot with rich notes of black cherry, plum, and mocha. Aged for 18 months in French oak barrels, it offers a velvety texture and a long, smooth finish.
            </p>
            
            <div className="flex items-center space-x-4 text-gray-700">
              <span className="flex items-center gap-2"><Grape size={20} /> Vintage: 2019</span>
              <span className="flex items-center gap-2"><Heart size={20} /> Loved by 95%</span>
            </div>
            
            <p className="text-xl font-bold text-gray-900">
              $55
              <span className="text-sm font-normal text-gray-600 ml-2">per bottle</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="px-6 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition-colors">
                Add to Cart
              </button>
              <Link
                to="/wines"
                className="inline-flex justify-center items-center px-6 py-3 border border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-700 hover:text-white transition-colors"
              >
                View All Wines
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}