import React from 'react';
import { Star, Beef, Fish, Blocks, CakeSlice } from 'lucide-react';
import seefood from '../../assets/seefood.jpg';
import fine from '../../assets/fine.jpg';
import cheese from '../../assets/cheese.jpg';
import dessert from '../../assets/dessert.jpg';

const pairingsData = [
  {
    title: 'Fine Dining Pairings',
    tag: { text: 'Featured', color: 'bg-red-500' },
    tag2: { text: 'Advanced', color: 'bg-gray-500' },
    time: '45-60 min',
    description: 'Michelin-starred restaurant inspired wine and food combinations',
    image: fine,
    items: [
      {
        title: 'Pan-Seared Duck Breast',
        wine: 'Burgundy Pinot Noir',
        description: 'Rich, gamey duck pairs beautifully with earthy, Burgundy.',
      },
      {
        title: 'Wagyu Beef Tenderloin',
        wine: 'Bordeaux Cabernet Blend',
        description: 'Premium beef demands a structured, powerful red wine.',
      },
    ],
  },
  {
    title: 'Seafood & Ocean',
    tag: { text: 'Medium', color: 'bg-orange-500' },
    time: '20-30 min',
    description: 'Fresh seafood paired with crisp whites and elegant rosés',
    image: seefood,
    items: [
      {
        title: 'Grilled Salmon',
        wine: 'Oregon Pinot Noir',
        description: 'The salmon\'s richness complements light red wines perfectly.',
      },
      {
        title: 'Oysters Mignonette',
        wine: 'Sancerre',
        description: 'Classic pairing - mineral wine with briny shellfish.',
      },
    ],
  },
  {
    title: 'Cheese & Charcuterie',
    tag: { text: 'Featured', color: 'bg-red-500' },
    tag2: { text: 'Easy', color: 'bg-green-500' },
    time: '10-15 min',
    description: 'Artisanal cheese boards with perfectly matched wines',
    image: cheese,
    items: [
      {
        title: 'Aged Gouda & Prosciutto',
        wine: 'Barolo',
        description: 'Nutty, caramel notes pair with structured Italian reds.',
      },
      {
        title: 'Brie & Fig Jam',
        wine: 'Champagne',
        description: 'Creamy cheese and bubbles create perfect harmony.',
      },
    ],
  },
  {
    title: 'Desserts & Sweet Wines',
    tag: { text: 'Medium', color: 'bg-orange-500' },
    time: '30-45 min',
    description: 'Decadent desserts paired with luscious sweet wines',
    image: dessert,
    items: [
      {
        title: 'Dark Chocolate Tart',
        wine: 'Port Wine',
        description: 'Rich chocolate and fortified wine create pure indulgence.',
      },
      {
        title: 'Crème Brûlée',
        wine: 'Sauternes',
        description: 'Caramelized sugar meets honeyed dessert wine.',
      },
    ],
  },
];

function FoodPairingCard({ data }) {
  const getIcon = (itemTitle) => {
    switch (itemTitle) {
      case 'Pan-Seared Duck Breast':
      case 'Wagyu Beef Tenderloin':
        return <Beef size={32} className="text-red-500" />;
      case 'Grilled Salmon':
      case 'Oysters Mignonette':
        return <Fish size={32} className="text-blue-400" />;
      case 'Aged Gouda & Prosciutto':
      case 'Brie & Fig Jam':
        return <Blocks size={32} className="text-yellow-500" />;
      case 'Dark Chocolate Tart':
      case 'Crème Brûlée':
        return <CakeSlice size={32} className="text-amber-600" />;
      default:
        return null;
    }
  };

  const getBgColor = (itemTitle) => {
    if (itemTitle.includes('Duck') || itemTitle.includes('Beef')) return 'bg-red-100';
    if (itemTitle.includes('Salmon') || itemTitle.includes('Oyster')) return 'bg-blue-100';
    if (itemTitle.includes('Gouda') || itemTitle.includes('Brie')) return 'bg-yellow-100';
    if (itemTitle.includes('Chocolate') || itemTitle.includes('Brûlée')) return 'bg-amber-100';
    return 'bg-gray-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
 
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 p-3 flex gap-2">
          {data.tag && (
            <span className={`text-white px-2 py-1 text-xs font-semibold rounded-full ${data.tag.color}`}>
              {data.tag.text}
            </span>
          )}
          {data.tag2 && (
            <span className={`text-white px-2 py-1 text-xs font-semibold rounded-full ${data.tag2.color}`}>
              {data.tag2.text}
            </span>
          )}
        </div>
        <div className="absolute top-0 right-0 p-4">
          <div className="w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-60 transition-colors">
            <Star size={20} className="text-white fill-current" />
          </div>
        </div>
      </div>

  ó
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-gray-500 text-sm mb-4">
          <span className="font-semibold text-black">{data.time}</span>
        </p>
        <p className="text-gray-600 mb-6 flex-grow">{data.description}</p>
        
        
        {data.items.map((item, index) => (
          <div key={index} className="flex items-start gap-4 mb-4 last:mb-0">
            <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full ${getBgColor(item.title)}`}>
              {getIcon(item.title)}
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                {item.title} <span className="font-normal text-gray-400">&bull;</span> {item.wine}
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
        
    
        <button className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors">
          View Recipe & Pairings
        </button>
      </div>
    </div>
  );
}

export default function Food() {
  return (
    <div className="bg-gray-50 py-35">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Food & Wine Pairings</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master the art of pairing with our curated collection of recipes and wine recommendations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pairingsData.map((pairing, index) => (
            <FoodPairingCard key={index} data={pairing} />
          ))}
        </div>
      </div>
    </div>
  );
}
