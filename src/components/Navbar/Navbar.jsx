import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wine,
  Grape,
  MapPin,
  ChefHat,
  Star,
  Search,
  Heart,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Wine className="text-red-700" size={24} />
            <span className="text-xl font-bold text-red-600">
              Bottle & Wine
            </span>
          </Link>

          {/* Desktop  */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <Wine size={18} /> Home
            </Link>
            <Link
              to="/wines"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <Grape size={18} /> Wines
            </Link>
            <Link
              to="/regions"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <MapPin size={18} /> Regions
            </Link>
            <Link
              to="/food-pairings"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <ChefHat size={18} /> Food Pairings
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <Star size={18} /> About
            </Link>
          </div>

          {/* Search & Favorites */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/search"
              className="flex items-center gap-1 text-red-700 hover:text-red-900"
            >
              <Search size={18} /> Search
            </Link>
            <Link to="/favorites" className="text-red-700 hover:text-red-900">
              <Heart size={18} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil*/}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <Wine size={18} /> Home
          </Link>
          <Link
            to="/wines"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <Grape size={18} /> Wines
          </Link>
          <Link
            to="/regions"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <MapPin size={18} /> Regions
          </Link>
          <Link
            to="/food-pairings"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <ChefHat size={18} /> Food Pairings
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <Star size={18} /> About
          </Link>
          <Link
            to="/search"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <Search size={18} /> Search
          </Link>
          <Link
            to="/favorites"
            className="flex items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setIsOpen(false)}
          >
            <Heart size={18} /> Favorites
          </Link>
        </div>
      )}
    </nav>
  );
}