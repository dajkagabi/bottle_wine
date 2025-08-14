import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";

export default function Hero() {
  motion;

  return (
    <section
      className="absolute inset-0 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Image in center */}
      <motion.div
        className="relative z-20 text-center max-w-2xl px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Taste the Art of Wine
        </motion.h1>

        <motion.p
          className="text-gray-200 text-lg md:text-xl mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Explore the finest flavors from the world’s best vineyards.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
        <Link to="wines">
            Discover More
        </Link>
        
        </motion.button>
      </motion.div>
    </section>
  );
}
