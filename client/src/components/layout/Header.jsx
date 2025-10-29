import React, { useEffect, useState } from "react";
import { emitter } from "../../lib/vendor/emitter";
import { Link } from "react-router-dom";
import { Heart, User, ShoppingCart, Search, Menu, X } from "lucide-react";
import VendorProfile from "../vendor/VendorProfile";

export function Header() {
  const [isVendorMode, setIsVendorMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleVendorModeChange = (value) => setIsVendorMode(value);
    emitter.on("vendorModeChange", handleVendorModeChange);
    return () => emitter.off("vendorModeChange", handleVendorModeChange);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 bg-white shadow-sm border-b border-gray-200 relative z-50">
      {/* ---------- Left: Logo ---------- */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/favicon.png"
          alt="GreenMart Logo"
          className="w-6 h-6 object-contain"
        />
        <h1 className="font-semibold text-lg text-green-700">GreenMart</h1>
      </Link>

      {/* ---------- Vendor Mode ---------- */}
      {isVendorMode ? (
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 p-2 sm:p-3 overflow-hidden">
            <img
              src="/images(vendor)/Bell.svg"
              alt="Notifications"
              className="w-full h-full cursor-pointer"
            />
            <span className="bg-[#E98E23] text-white rounded-full absolute top-0 right-0 text-[8px] px-[4px]">
              02
            </span>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#DFE4FF] p-1.5 overflow-hidden">
            <img
              src="/images(vendor)/user-profile-pic.svg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <VendorProfile />
        </div>
      ) : (
        <>
          {/* ---------- Large Screens (Show All) ---------- */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {/* Nav Links */}
            <div className="flex space-x-6 mr-4">
              <Link
                to="/explore"
                className="text-gray-700 hover:text-green-600"
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="text-gray-700 hover:text-green-600"
              >
                Categories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600"
              >
                Contact
              </Link>
            </div>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="relative flex-1 max-w-xs hidden lg:block"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
            </form>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          {/* ---------- Medium Screens (Search + Icons + Hamburger) ---------- */}
          <div className="hidden md:flex lg:hidden items-center gap-4 ml-auto">
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="relative flex-1 max-w-xs hidden md:block"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
            </form>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
              <User className="w-6 h-6 text-gray-600 hover:text-green-600" />
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-green-600" />
            </div>

            {/* Hamburger */}
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* ---------- Small Screens (Hamburger Only) ---------- */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* ---------- Dropdown Menu for Medium & Small ---------- */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 flex flex-col items-center py-6 space-y-4 md:space-y-5">
              {/* Search (Only Small) */}
              <form
                onSubmit={handleSearch}
                className="relative w-11/12 max-w-sm md:hidden"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              </form>
              {/* Links */}
              <div className="flex flex-col items-center space-y-4">
                <Link
                  to="/explore"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Shop
                </Link>
                <Link
                  to="/categories"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Categories
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Contact
                </Link>
              </div>

              {/* Icons (Only Small) */}
              <div className="flex items-center gap-6 border-t border-gray-100 mt-4 pt-4 md:hidden">
                <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
                <User className="w-6 h-6 text-gray-600 hover:text-green-600" />
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-green-600" />
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
}
