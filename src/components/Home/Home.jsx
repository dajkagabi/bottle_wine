import React from 'react';
import Hero from '../Hero/Hero';
import Stars from '../Stars/Stars';
import FeaturedWines from '../Featured Wines/Featured Wines';


const Home = () => {
  return (
    <div>
      <Hero/>
    
   
      <main className="mt-[100vh]">
        <Stars/>
        <FeaturedWines/>
      </main>
          
    </div>
  );
};

export default Home;