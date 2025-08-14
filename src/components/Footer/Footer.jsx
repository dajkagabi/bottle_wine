import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Instagram, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
    

          <div className="flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Wine className="text-red-700" size={32} />
              <span className="text-2xl font-bold text-black">Bottle & Wine</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Discover the world's best wines. A journey into sophisticated tastes and passionate stories.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-red-700 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-red-700 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-red-700 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-red-700 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/wines" className="text-gray-600 hover:text-red-700 transition-colors">Wines</Link></li>
              <li><Link to="/regions" className="text-gray-600 hover:text-red-700 transition-colors">Regions</Link></li>
              <li><Link to="/food-pairings" className="text-gray-600 hover:text-red-700 transition-colors">Food Pairings</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-700 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-red-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-700 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-700 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-700 transition-colors">FAQ</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our mailing list to receive the latest updates and exclusive offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-red-700 text-white rounded-r-md hover:bg-red-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bottle & Wine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}