// Header.jsx
import React, { useEffect, useState } from "react";
import {
  MapPin,
  ChevronDown,
  Search,
  ShoppingCart,
  Menu
} from "lucide-react";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`bg-white shadow-sm sticky top-0 z-40 transition-opacity duration-500 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-white text-gray-800 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-sm">
          
          {/* Logo & Location */}
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold tracking-tighter">
              <span className="text-orange-500">Tool</span>
              <span className="text-gray-900">Mart</span>
            </div>

            <div className="hidden md:flex items-center space-x-2 border border-transparent hover:border-gray-300 p-2 rounded-md cursor-pointer transition-colors">
              <MapPin className="w-5 h-5 text-orange-500 -mt-1" />
              <div>
                <div className="text-xs text-gray-500">Deliver to</div>
                <div className="font-bold">Mumbai 400097</div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl mx-4 hidden lg:flex">
            <div className="relative flex w-full shadow-sm">
              <div className="flex-shrink-0">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 h-full px-3 rounded-l-md text-xs flex items-center border border-r-0 border-gray-300 transition-colors">
                  All <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search for tools, brands, and more"
                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors flex-shrink-0">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Account, Orders, Cart */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden md:flex items-center space-x-2 border border-transparent hover:border-gray-300 p-2 rounded-md transition-colors"
            >
              <div>
                <div className="text-xs text-gray-500">Hello, sign in</div>
                <div className="font-bold flex items-center">
                  Account & Lists <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="#"
              className="hidden md:flex items-center space-x-2 border border-transparent hover:border-gray-300 p-2 rounded-md transition-colors"
            >
              <div>
                <div className="text-xs text-gray-500">Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 border border-transparent hover:border-gray-300 p-2 rounded-md transition-colors relative"
            >
              <ShoppingCart className="w-8 h-8 text-orange-500" />
              <span className="font-bold">Cart</span>
              <span className="absolute top-0 left-4 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <nav className="bg-orange-100 text-orange-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 py-2 text-sm font-medium">
            <button className="flex items-center font-bold hover:text-orange-600 transition-colors">
              <Menu className="w-5 h-5 mr-1" /> All Categories
            </button>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Today's Deals
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              New Arrivals
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Best Sellers
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Industrial
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Safety
            </a>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 h-full w-1/3 bg-contain bg-no-repeat bg-right opacity-10"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"
          }}
        />
      </nav>
    </header>
  );
};

export default Header;
