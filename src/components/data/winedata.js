import mar from '../../assets/mar.png';
import dom from '../../assets/dom.png';
import san from '../../assets/san.png';
import bar from '../../assets/bar.jpg';
import clod from '../../assets/clod.png';
import doms from '../../assets/doms.png';
import cha from '../../assets/cha.png';


const WineData = [
    {
        id: 1,
        name: "Château Margaux",
        producer: "Château Margaux",
        region: "Bordeaux",
        vintage: 2018,
        price: 890,
        rating: 4.9,
        type: "Red",
        image: mar,
        foodPairings: ["Grilled lamb", "Beef Wellington", "Aged cheeses"],
        description: "An exceptional Bordeaux blend showcasing elegance and complexity with deep red fruit and floral notes.",
        temperature: "16-18°C"
    },
    {
        id: 2,
        name: "Domaine de la Côte Pinot Noir",
        producer: "Domaine de la Côte",
        region: "Burgundy",
        vintage: 2020,
        price: 45,
        rating: 4.5,
        type: "Red",
        image: dom,
        foodPairings: ["Roasted duck", "Mushroom risotto", "Salmon"],
        description: "Elegant California Pinot Noir with bright acidity and delicate fruit flavors.",
        temperature: "14-16°C"
    },
    {
        id: 3,
        name: "Sancerre Loire Valley",
        producer: "Henri Bourgeois",
        region: "Loire Valley",
        vintage: 2022,
        price: 32,
        rating: 4.3,
        type: "White",
        image: san,
        foodPairings: ["Oysters", "Goat cheese", "Grilled fish"],
        description: "Crisp and mineral-driven Sauvignon Blanc from the heart of Loire Valley.",
        temperature: "8-10°C"
    },
    {
        id: 4,
        name: "Barolo Brunate",
        producer: "Giuseppe Rinaldi",
        region: "Piedmont",
        vintage: 2017,
        price: 120,
        rating: 4.7,
        type: "Red",
        image: bar,
        foodPairings: ["Truffle dishes", "Braised beef", "Game meats"],
        description: "Traditional Barolo with intense aromatics and structured tannins from prestigious Brunate cru.",
        temperature: "18-20°C"
    },
    {
        id: 5,
        name: "Château Lafite Rothschild",
        producer: "Château Lafite Rothschild",
        region: "Bordeaux",
        vintage: 2015,
        price: 1500,
        rating: 4.8,
        type: "Red",
        image: cha,
        foodPairings: ["Rack of lamb", "Roasted venison"],
        description: "A legendary Bordeaux from a First Growth estate, known for its elegance and longevity.",
        temperature: "16-18°C"
    },
    {
        id: 6,
        name: "Cloudy Bay Sauvignon Blanc",
        producer: "Cloudy Bay",
        region: "Marlborough",
        vintage: 2023,
        price: 25,
        rating: 4.6,
        type: "White",
        image: clod,
        foodPairings: ["Seafood", "Green salads", "Goat cheese"],
        description: "Vibrant and aromatic Sauvignon Blanc with passionfruit and citrus notes.",
        temperature: "8-10°C"
    },
    {
        id: 7,
        name: "Dom Pérignon Brut Rosé",
        producer: "Dom Pérignon",
        region: "Champagne",
        vintage: 2006,
        price: 450,
        rating: 4.9,
        type: "Sparkling",
        image: doms,
        foodPairings: ["Sushi", "Caviar", "Fruit desserts"],
        description: "An elegant and complex Rosé Champagne with notes of wild strawberries and toasted brioche.",
        temperature: "6-8°C"
    }
];

export default WineData;