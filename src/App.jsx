import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Regions from "./components/Regions/Regions";
import FoodPairings from "./components/FoodPairings/FoodPairings";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Wines from "./components/Wines/Wines";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines" element={<Wines />} />

        <Route path="/regions" element={<Regions />} />
        <Route path="/food-pairings" element={<FoodPairings />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
