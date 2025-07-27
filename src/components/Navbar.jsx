"use client";

import { useState, useEffect, useRef } from "react";
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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearchClick = () => alert("Search functionality coming soon!");
  const handleGlobeClick = () => alert("Language selection coming soon!");

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-cyan-800/40 via-cyan-900/30 to-cyan-800/40
        backdrop-blur-xl
        border-b border-cyan-700/40
        shadow-neu-light
        font-sans
        "
      aria-label="Main navigation"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white select-none">
        {/* Left Icons */}
        <div className="flex items-center gap-7">
          {[{ icon: FaSearch, action: handleSearchClick, label: "Search" },
            { icon: FaGlobe, action: handleGlobeClick, label: "Language Selector" }
          ].map(({ icon: Icon, action, label }) => (
            <Icon
              key={label}
              onClick={action}
              className="
                cursor-pointer
                text-white
                hover:text-cyan-400
                transition
                duration-300
                transform
                hover:scale-125
                shadow-neu-icon
                rounded-lg
                p-1
                "
              aria-label={label}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === "Enter") action(); }}
            />
          ))}

          {/* Mobile menu hamburger */}
          <div className="lg:hidden">
            <FaBars
              onClick={() => setIsMobileMenuOpen(true)}
              className="
                cursor-pointer
                text-white
                hover:text-cyan-400
                transition
                duration-300
                transform
                hover:scale-125
                shadow-neu-icon
                rounded-lg
                p-1
              "
              aria-label="Open menu"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === "Enter") setIsMobileMenuOpen(true); }}
            />
          </div>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="
            flex items-center
            hover:scale-105
            transition-transform
            duration-300
            focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md
          "
          aria-label="Homepage"
        >
          <img
            src={logoImage || "/placeholder.svg"}
            alt="Alora Logo"
            className="h-16 w-auto drop-shadow-lg"
            loading="lazy"
          />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-7">
          <FaUser
            className="
              cursor-pointer
              text-white
              hover:text-cyan-400
              transition
              duration-300
              transform
              hover:scale-125
              shadow-neu-icon
              rounded-lg
              p-1
            "
            aria-label="User profile"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => { if (e.key === "Enter") alert("User profile clicked"); }}
          />
          <div className="relative">
            <FaLock
              className="
                cursor-pointer
                text-white
                hover:text-cyan-400
                transition
                duration-300
                transform
                hover:scale-125
                shadow-neu-icon
                rounded-lg
                p-1
              "
              aria-label="Notifications"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === "Enter") alert("Notifications clicked"); }}
            />
            <span
              className="
                absolute -top-2 -right-2
                bg-gradient-to-r from-red-500 to-pink-500
                text-white text-xs w-5 h-5 rounded-full
                flex items-center justify-center font-semibold shadow-lg animate-pulse
                pointer-events-none
              "
            >
              0
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center bg-cyan-900/30 backdrop-blur-md border-t border-cyan-700/40">
        <ul className="flex gap-8 px-6 py-3 font-semibold text-white">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative dropdown-toggle"
              onMouseEnter={() => setOpenDropdownIndex(idx)}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => setOpenDropdownIndex(null), 250);
              }}
            >
              <Link
                to={item.path}
                className="
                  flex items-center gap-1 px-3 py-2 rounded-lg
                  hover:bg-cyan-700/50 hover:text-cyan-300
                  transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-cyan-400
                "
                tabIndex={0}
                aria-haspopup={!!item.dropdown}
                aria-expanded={openDropdownIndex === idx}
              >
                {item.name}
                {item.dropdown && (
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openDropdownIndex === idx ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openDropdownIndex === idx && (
                <ul
                  className="
                    dropdown-menu
                    absolute top-full left-0 mt-2 w-52
                    bg-gradient-to-b from-cyan-50 to-cyan-100/80
                    rounded-lg shadow-lg text-cyan-900
                    py-2
                    opacity-100 pointer-events-auto
                    transition-opacity duration-300
                  "
                  onMouseEnter={() => {
                    clearTimeout(dropdownTimeoutRef.current);
                    setOpenDropdownIndex(idx);
                  }}
                  onMouseLeave={() => setOpenDropdownIndex(null)}
                >
                  {item.dropdown.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.path}
                        className="
                          block px-4 py-2 text-sm rounded-md
                          hover:bg-cyan-300 hover:text-cyan-900
                          transition-colors duration-200
                          focus:outline-none focus:bg-cyan-300 focus:text-cyan-900
                        "
                        tabIndex={0}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px]
          bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-900
          backdrop-blur-xl text-white border-r border-cyan-700/40
          transform transition-transform duration-300 ease-in-out z-50
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-between items-center p-6 border-b border-cyan-700/40">
          <img
            src={logoImage || "/placeholder.svg"}
            alt="Alora Logo"
            className="h-12 w-auto drop-shadow-md"
            loading="lazy"
          />
          <IoMdClose
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer text-white hover:text-red-500 transition duration-200"
            aria-label="Close menu"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => { if (e.key === "Enter") setIsMobileMenuOpen(false); }}
          />
        </div>
        <nav className="flex flex-col gap-1 py-6 px-4 text-white font-semibold select-none">
          {navItems.map((item, idx) => (
            <div key={idx} className="group">
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex items-center justify-between px-4 py-3 rounded-lg
                  hover:bg-cyan-700/70 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-cyan-400
                "
              >
                <span>{item.name}</span>
                {item.dropdown && <FaChevronDown className="h-4 w-4 ml-2" />}
              </Link>
              {item.dropdown && (
                <ul className="ml-6 mt-1 flex flex-col gap-1 max-h-0 overflow-hidden group-hover:max-h-96 transition-[max-height] duration-300 ease-in-out">
                  {item.dropdown.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="
                          block px-4 py-2 text-sm rounded-md
                          hover:bg-cyan-500
                          transition-colors duration-200
                          focus:outline-none focus:bg-cyan-500
                        "
                        tabIndex={0}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Extra Neumorphism Shadows for icons (Tailwind plugin or custom) */}
      <style>{`
        .shadow-neu-light {
          box-shadow:
            6px 6px 16px rgba(0, 0, 0, 0.2),
            -6px -6px 16px rgba(255, 255, 255, 0.1);
        }
        .shadow-neu-icon {
          box-shadow:
            inset 3px 3px 5px rgba(255, 255, 255, 0.2),
            inset -3px -3px 5px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </header>
    
  );
};

export default Navbar;
