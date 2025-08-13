import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Wines from './components/Wines/Wines';
import Regions from './components/Regions/Regions';
import FoodPairings from './components/FoodPairings/FoodPairings';
import About from './components/About/About';
import SearchPage from './components/SearchPage/SearchPage';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
     <>
      <Navbar/>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/food-pairings" element={<FoodPairings />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;