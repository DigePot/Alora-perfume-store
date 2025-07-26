// src/components/Navbar.jsx

"use client";

import { useState } from "react";
import { FaSearch, FaGlobe, FaUser, FaLock, FaBars, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logoImage from "../assets/alora_logo.png";

const navItems = [
  { name: "New", path: "/new" },
  {
    name: "Perfumes",
    path: "/perfumes",
    dropdown: [
      { name: "Men's Perfume", path: "/perfumes/men" },
      { name: "Women's Perfume", path: "/perfumes/women" },
    ],
  },
  {
    name: "Men Fragrance",
    path: "/men-fragrance",
    dropdown: [
      { name: "Men's Watches", path: "/men/watches" },
      { name: "Men's Perfumes", path: "/men/perfumes" },
    ],
  },
  { name: "Asaf watches", path: "/asaf-watches" },
  {
    name: "Arrogate Collection",
    path: "/arrogate-collection",
    dropdown: [
      { name: "Luxury Line", path: "/arrogate/luxury" },
      { name: "Limited Editions", path: "/arrogate/limited" },
    ],
  },
  {
    name: "Best Seller",
    path: "/best-seller",
    dropdown: [
      { name: "Top Rated", path: "/best/top" },
      { name: "Most Purchased", path: "/best/most" },
    ],
  },
  { name: "Private Collection", path: "/private" },
  { name: "The art of dedication", path: "/dedication" },
  {
    name: "Care products",
    path: "/care-products",
    dropdown: [
      { name: "Skin Care", path: "/care/skin" },
      { name: "Hair Care", path: "/care/hair" },
    ],
  },
  { name: "Day Offers", path: "/offers" },
  { name: "All Products", path: "/all-products" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchClick = () => {
    alert("Search functionality coming soon!");
  };

  const handleGlobeClick = () => {
    alert("Language selection coming soon!");
  };

  return (
    <div className="fixed w-full z-50 text-white bg-transparent">
      <div className="relative z-10">
        {/* Top Row: Logo and Icons */}
        <div className="flex justify-between items-center w-full px-8 py-4">
          <div className="flex items-center gap-6">
            <FaSearch className="cursor-pointer h-5 w-5 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 drop-shadow-lg" onClick={handleSearchClick} />
            <FaGlobe className="cursor-pointer h-5 w-5 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 drop-shadow-lg" onClick={handleGlobeClick} />
            <div className="lg:hidden flex items-center">
              <FaBars className="cursor-pointer h-5 w-5 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 drop-shadow-lg" onClick={() => setIsMobileMenuOpen(true)} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <img src={logoImage || "/placeholder.svg"} alt="Alora Logo" className="h-16 w-auto filter drop-shadow-xl" />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <FaUser className="cursor-pointer h-5 w-5 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 drop-shadow-lg" />
            <div className="relative">
              <FaLock className="cursor-pointer h-5 w-5 text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 drop-shadow-lg" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-lg">0</span>
            </div>
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="flex justify-center items-center w-full px-8 pb-4">
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            {navItems.map((item, idx) => (
              <li key={idx} className="group relative">
                <Link to={item.path} className="flex items-center gap-1 text-white hover:text-blue-300 transition-all duration-300 no-underline relative py-2 px-3 rounded-lg hover:bg-white/10 drop-shadow-lg" style={{ color: "white", textDecoration: "none", fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', fontWeight: "500", letterSpacing: "0.025em" }}>
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {item.dropdown && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-2 hidden group-hover:block">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link to={subItem.path} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-black/95 backdrop-blur-md text-white border-r border-white/20 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <img src={logoImage || "/placeholder.svg"} alt="Alora Logo" className="h-12 w-auto" />
          <IoMdClose className="cursor-pointer h-6 w-6 text-white hover:text-red-400 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <nav className="flex flex-col gap-2 py-6 px-4">
          {navItems.map((item, idx) => (
            <Link key={idx} to={item.path} className="flex items-center gap-2 text-white hover:text-blue-300 hover:bg-white/10 text-base transition-all duration-200 no-underline py-3 px-4 rounded-lg" style={{ color: "white", textDecoration: "none", fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', fontWeight: "400" }} onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
              {item.dropdown && <FaChevronDown className="h-4 w-4 ml-auto" />}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;