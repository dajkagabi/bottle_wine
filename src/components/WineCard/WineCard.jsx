import React, { useState } from 'react';
import { Heart, Star, MapPin, Thermometer } from 'lucide-react';

const WineCard = ({ wine }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    
      <div className="relative bg-gray-100" style={{ height: '260px' }}>
        <img
          src={wine.image}
          alt={wine.name}
          className="w-full h-full object-contain p-2"
        />

       
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full ${
            wine.type === 'Red'
              ? 'bg-red-500 text-white'
              : wine.type === 'White'
              ? 'bg-white text-gray-800'
              : 'bg-pink-500 text-white'
          }`}
        >
          {wine.type}
        </span>

      
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 transition-colors duration-200"
        >
          <Heart
            className={`h-6 w-6 transition-colors ${
              isFavorite
                ? 'text-red-500'
                : 'text-gray-400 hover:text-red-500'
            }`}
            fill={isFavorite ? '#ef4444' : 'none'}
          />
        </button>
      </div>

   
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{wine.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{wine.producer}</p>

        
        <div className="flex items-center text-gray-600 text-sm mb-4 flex-wrap gap-y-1">
          <Star className="h-4 w-4 mr-1" color="#FFD700" fill="#FFD700" />
          <span className="font-semibold text-gray-700">{wine.rating}</span>
          <span className="mx-2 text-gray-400">•</span>
          <MapPin className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-gray-700">{wine.region}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-700">Vintage: {wine.vintage}</span>
          <span className="ml-auto text-gray-700">
            <Thermometer className="h-4 w-4 inline-block mr-1 text-gray-500" />
            {wine.temperature}
          </span>
        </div>

      
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {wine.description}
        </p>

      
        <div className="flex flex-wrap gap-2 mb-4">
          {wine.foodPairings.slice(0, 2).map((pairing, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {pairing}
            </span>
          ))}
          {wine.foodPairings.length > 2 && (
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
              +{wine.foodPairings.length - 2} more
            </span>
          )}
        </div>

        
        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-gray-800">
              ${wine.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">per bottle</span>
          </div>
          <button className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
