import React, { useState, useEffect } from 'react';
import WineCard from '../WineCard/WineCard';
import WineData from '../data/winedata';




const WineFilter = () => {
    const [filteredWines, setFilteredWines] = useState(WineData);
    const [filters, setFilters] = useState({
        wineType: [],
        region: [],
        priceRange: [0, 1000],
        minRating: 0
    });

    const allWineTypes = [...new Set(WineData.map(wine => wine.type))];
    const allRegions = [...new Set(WineData.map(wine => wine.region))];

    useEffect(() => {
        const applyFilters = () => {
            let tempWines = WineData;

            if (filters.wineType.length > 0) {
                tempWines = tempWines.filter(wine => filters.wineType.includes(wine.type));
            }

            if (filters.region.length > 0) {
                tempWines = tempWines.filter(wine => filters.region.includes(wine.region));
            }

            tempWines = tempWines.filter(wine => 
                wine.price >= filters.priceRange[0] && wine.price <= filters.priceRange[1]
            );

            if (filters.minRating > 0) {
                tempWines = tempWines.filter(wine => wine.rating >= filters.minRating);
            }
            
            setFilteredWines(tempWines);
        };

        applyFilters();
    }, [filters]);

    const handleCheckboxChange = (filterName, value) => {
        setFilters(prevFilters => {
            const newValues = prevFilters[filterName].includes(value)
                ? prevFilters[filterName].filter(item => item !== value)
                : [...prevFilters[filterName], value];
            return { ...prevFilters, [filterName]: newValues };
        });
    };

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...filters.priceRange];
        newPriceRange[index] = Number(e.target.value);
        setFilters(prevFilters => ({ ...prevFilters, priceRange: newPriceRange }));
    };

    const handleRatingChange = (e) => {
        setFilters(prevFilters => ({ ...prevFilters, minRating: Number(e.target.value) }));
    };

    return (
        <div className="container mx-auto p-25 bg-gray-50 min-h-screen mt-16">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Explore Our Collection</h1>
            <p className="text-center text-gray-600 mb-8">Browse through our carefully curated selection of wines from renowned regions worldwide.</p>

          
            <div className="flex flex-col gap-8">
           
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold flex items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                            </svg>
                            Filters
                        </h2>
                        <span className="bg-gray-200 text-gray-700 text-sm font-medium px-2 py-1 rounded-full">{filteredWines.length} wines</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-800 mb-2">Wine Type</h3>
                            {allWineTypes.map(type => (
                                <div key={type} className="flex items-center mb-1">
                                    <input
                                        type="checkbox"
                                        id={`type-${type}`}
                                        value={type}
                                        checked={filters.wineType.includes(type)}
                                        onChange={() => handleCheckboxChange('wineType', type)}
                                        className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                    />
                                    <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">{type}</label>
                                </div>
                            ))}
                        </div>

                      
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-800 mb-2">Region</h3>
                            <div className="max-h-40 overflow-y-auto pr-2">
                                {allRegions.map(region => (
                                    <div key={region} className="flex items-center mb-1">
                                        <input
                                            type="checkbox"
                                            id={`region-${region}`}
                                            value={region}
                                            checked={filters.region.includes(region)}
                                            onChange={() => handleCheckboxChange('region', region)}
                                            className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <label htmlFor={`region-${region}`} className="ml-2 text-sm text-gray-700">{region}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                       
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-800 mb-2">Price Range</h3>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    value={filters.priceRange[0]}
                                    onChange={(e) => handlePriceChange(e, 0)}
                                    className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm text-center"
                                    placeholder="Min"
                                />
                                <span>-</span>
                                <input
                                    type="number"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handlePriceChange(e, 1)}
                                    className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm text-center"
                                    placeholder="Max"
                                />
                            </div>
                        </div>

                      
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-800 mb-2">Minimum Rating</h3>
                            <select
                                value={filters.minRating}
                                onChange={handleRatingChange}
                                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                            >
                                <option value="0">Any rating</option>
                                <option value="4.0">4.0+</option>
                                <option value="4.5">4.5+</option>
                                <option value="4.7">4.7+</option>
                                <option value="4.8">4.8+</option>
                                <option value="4.9">4.9+</option>
                            </select>
                        </div>
                    </div>
                </div>

                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredWines.length > 0 ? (
                            filteredWines.map(wine => (
                                <WineCard key={wine.id} wine={wine} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 text-lg p-10">
                                No wines found matching your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WineFilter;