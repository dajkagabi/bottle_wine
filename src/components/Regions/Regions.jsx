import React from "react";
import { MapPin, Droplet, Sun, ArrowRight } from "lucide-react";
import {Link} from 'react-router-dom';
import tuscany from "../../assets/tuscany.jpg";
import bordex from "../../assets/bordex.jpg";
import napa from "../../assets/napa.jpg";

const wineRegions = [
  {
    name: "Bordeaux",
    country: "France",
    image: bordex,
    featured: true,
    description:
      "The world's most prestigious wine region, home to legendary chateaux and exceptional Cabernet Sauvignon blends.",
    climate: "Maritime Temperate",
    avgTemp: "14°C",
    wineries: "8500+",
    primaryGrapes: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
  },
  {
    name: "Tuscany",
    country: "Italy",
    image: tuscany,
    featured: false,
    description:
      "Rolling hills dotted with cypress trees, producing world-class Sangiovese and Super Tuscans.",
    climate: "Mediterranean",
    avgTemp: "16°C",
    wineries: "2800+",
    primaryGrapes: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
  },
  {
    name: "Napa Valley",
    country: "USA",
    image: napa,
    featured: true,
    description:
      "California's premier wine region known for world-class Cabernet Sauvignon and innovative winemaking.",
    climate: "Mediterranean",
    avgTemp: "18°C",
    wineries: "475+",
    primaryGrapes: ["Cabernet Sauvignon", "Chardonnay", "Pinot Noir"],
  },
];

const Regions = () => {
  return (
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          Explore Wine Regions
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover the world's most prestigious wine regions and the unique
          characteristics that make them special
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wineRegions.map((region, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-48 object-cover"
              />
              {region.featured && (
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin size={14} className="mr-1 text-gray-400" />
                    {region.country}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm flex-grow">
                {region.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600 border-t border-gray-200 pt-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <Droplet size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p>Climate:</p>
                    <p className="font-semibold">{region.climate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <Sun size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p>Avg. Temp:</p>
                    <p className="font-semibold">{region.avgTemp}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 flex items-center border-b border-gray-200 pb-4">
                <p>Wineries:</p>
                <p className="font-semibold ml-2">{region.wineries}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Primary Grapes:</p>
                <div className="flex flex-wrap gap-2">
                  {region.primaryGrapes.map((grape, grapeIndex) => (
                    <span
                      key={grapeIndex}
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {grape}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="flex-1 flex justify-center items-center py-2 px-4 bg-red-700 text-white rounded-lg shadow-sm hover:bg-red-800 transition-colors duration-200">
                <Link to="/wines">Explore Wines
                  
                  </Link> 
                </button>
                <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Regions;
