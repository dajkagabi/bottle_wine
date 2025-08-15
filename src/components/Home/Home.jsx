import React from 'react';
import Hero from '../Hero/Hero';
import Stars from '../Stars/Stars';
import FeaturedWines from '../Featured Wines/Featured Wines';
import Regions from '../Regions/Regions';
import Maps from '../Maps/Maps';
import Food from '../FoodPairings/FoodPairings';
import About from '../About/About';


const Home = () => {
  return (
    <div>
      <Hero/>
      <main className="mt-[100vh]">
        <Stars/>
        <FeaturedWines/>
        <Regions/>
        <Maps/>
        <Food/>
        <About/>
      </main>
          
    </div>
  );
};

export default Home;