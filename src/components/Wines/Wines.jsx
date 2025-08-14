import React, { useState } from "react";
import { Heart, Star, Filter, Thermometer, ShoppingCart } from "lucide-react";
import chateauMargaux from "../../assets/merlot.png";
import cotePinot from "../../assets/merlot.png";
import sancerreLoire from "../../assets/merlot.png";
import baroloBrunate from "../../assets/merlot.png";

export default function Wines() {
  const wines = [
    {
      id: 1,
      image: chateauMargaux,
      label: "red",
      name: "Château Margaux",
      region: "Margaux, France",
      rating: 4.9,
      vintage: "2018",
      serving_temp: "16-18°C",
      description:
        "An exceptional Bordeaux blend showcasing elegance and complexity with remarkable aging potential.",
      pairings: ["Grilled lamb", "Beef Wellington", "Aged cheeses"],
      price: 890,
    },
    {
      id: 2,
      image: cotePinot,
      label: "red",
      name: "Domaine de la Côte Pinot Noir",
      region: "Santa Rita Hills, USA",
      rating: 4.5,
      vintage: "2020",
      serving_temp: "14-16°C",
      description:
        "Elegant California Pinot Noir with bright acidity and delicate fruit flavors.",
      pairings: ["Roasted duck", "Mushroom risotto", "Salmon"],
      price: 45,
    },
    {
      id: 3,
      image: sancerreLoire,
      label: "white",
      name: "Sancerre Loire Valley",
      region: "Loire Valley, France",
      rating: 4.3,
      vintage: "2022",
      serving_temp: "8-10°C",
      description:
        "Crisp and mineral driven Sauvignon Blanc from the heart of Loire Valley.",
      pairings: ["Oysters", "Goat cheese", "Grilled fish"],
      price: 32,
    },
    {
      id: 4,
      image: baroloBrunate,
      label: "red",
      name: "Barolo Brunate",
      region: "Piedmont, Italy",
      rating: 4.7,
      vintage: "2017",
      serving_temp: "18-20°C",
      description:
        "Traditional Barolo with intense aromatics and structured tannins from prestigious vineyards.",
      pairings: ["Truffle dishes", "Braised beef", "Game meats"],
      price: 120,
    },
  ];

  const [wineTypeFilter, setWineTypeFilter] = useState([]);

  const handleWineTypeChange = (value) => {
    setWineTypeFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredWines = wines.filter(
    (wine) => wineTypeFilter.length === 0 || wineTypeFilter.includes(wine.label)
  );

  const labelColors = {
    red: "bg-red-700 text-white",
    white: "bg-yellow-400 text-black",
    rose: "bg-pink-300 text-black",
    sparkling: "bg-blue-200 text-black",
    dessert: "bg-amber-200 text-black",
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fejléc */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-700">
            Explore Our Collection
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Browse through our carefully curated selection of wines from renowned regions worldwide.
          </p>
        </section>

        {/* Szűrők */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex items-center space-x-2 text-gray-700 font-semibold mb-4">
            <Filter size={20} />
            <span>Filters</span>
            <span className="ml-auto text-sm bg-gray-200 px-3 py-1 rounded-full">
              {filteredWines.length} wines
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {["red", "white", "rose", "sparkling", "dessert"].map((type) => (
              <button
                key={type}
                onClick={() => handleWineTypeChange(type)}
                className={`px-4 py-2 rounded-full border transition ${
                  wineTypeFilter.includes(type)
                    ? "bg-red-700 text-white border-red-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Bor kártyák */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition"
            >
              {/* Kép */}
              <div className="relative">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-56 object-cover"
                />
                <span
                  className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full ${labelColors[wine.label]}`}
                >
                  {wine.label}
                </span>
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100">
                  <Heart size={18} className="text-gray-500" />
                </button>
              </div>

              {/* Tartalom */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{wine.name}</h3>
                <p className="text-gray-600 text-sm">{wine.region}</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Star
                      size={14}
                      className="text-yellow-500 fill-current mr-1"
                    />
                    {wine.rating}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Thermometer size={14} className="mr-1 text-gray-400" />
                    {wine.serving_temp}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-2">Vintage: {wine.vintage}</p>
                <p className="mt-3 text-gray-700 text-sm line-clamp-2">
                  {wine.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {wine.pairings.map((pairing, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {pairing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ár és gomb */}
              <div className="p-4 border-t flex justify-between items-center mt-auto">
                <div>
                  <span className="text-xl font-bold">${wine.price}</span>
                  <span className="text-sm text-gray-600"> / bottle</span>
                </div>
                <button className="px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 flex items-center gap-2">
                  <ShoppingCart size={16} />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Összes bor gomb */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-700 hover:text-white transition">
            View All Wines
          </button>
        </div>
      </div>
    </div>
  );
}
