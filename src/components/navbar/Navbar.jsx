import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaChevronDown, FaBars } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import logoImage from '../../assets/alora_logo.png';
import UserDropdown from './DropDown';
import MobileMenu from './MobileMenu';
import { mainNavItems, categoryNavItems } from './NavConfig';

const NavDropdown = ({ title, items, isOpen, onToggle, isActive }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        onToggle();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative group ${
          isOpen || isActive ? 'text-blue-300' : 'text-white hover:text-blue-300'
        }`}
        style={{ background: 'none', border: 'none' }}
      >
        {title}
        <FaChevronDown
          className={`w-3 h-3 transition-transform duration-200 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span
          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-300 transition-all duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-[110%] left-0 w-56 bg-[#1e3a8a]/95 rounded-lg shadow-lg border border-blue-700/30 py-2 z-50 backdrop-blur-sm">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-white hover:text-blue-300 hover:bg-blue-800/30 transition-colors duration-200"
              onClick={onToggle}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isFragranceDropdownOpen, setIsFragranceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { cartItemCount } = useCart();
  const { user } = useAuth();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Filter navigation items
  const displayNavItems = mainNavItems.filter(
    (item) =>
      !item.name.includes("Men's Fragrance") &&
      !item.name.includes("Women's Fragrance") &&
      !item.name.includes('About') &&
      !item.name.includes('Contact')
  );

  // Get fragrance items
  const fragranceItems =
    categoryNavItems
      .find((cat) => cat.name === 'Categories')
      ?.items.filter((item) => item.name.includes('Fragrance')) || [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFragranceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActiveRoute = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isFragranceActive = () => {
    return (
      location.pathname.startsWith('/men-fragrance') ||
      location.pathname.startsWith('/women-fragrance')
    );
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isHomePage
            ? isScrolled
              ? 'bg-[#07263c] shadow-lg'
              : 'bg-transparent'
            : 'bg-[#07263c]'
        } ${isScrolled && !isHomePage ? 'shadow-lg' : ''} ${className}`}
      >
        {/* Main Navbar */}
        <div className="flex items-center justify-between w-full px-6 lg:px-12 py-4">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-white p-2 hover:text-blue-300 transition-colors duration-200 bg-transparent border-none focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
             style={{ background: 'none' }} 
            >
           <FaBars className="w-5 h-5" />
          </button>

            <Link to="/" className="flex items-center group">
              <img
                src={logoImage}
                alt="Alora Logo"
                className="h-14 w-auto group-hover:scale-105 transition-transform duration-200 brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" ref={dropdownRef}>
            <ul className="flex items-center gap-6">
              {displayNavItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative ${
                      isActiveRoute(item.path)
                        ? 'text-blue-300'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-300 transition-all duration-300 ${
                        isActiveRoute(item.path)
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}

              {/* Fragrance Dropdown */}
              <li className="relative group">
                <NavDropdown
                  title="Fragrance"
                  items={fragranceItems}
                  isOpen={isFragranceDropdownOpen}
                  onToggle={() =>
                    setIsFragranceDropdownOpen(!isFragranceDropdownOpen)
                  }
                  isActive={isFragranceActive()}
                />
              </li>
            </ul>
          </nav>

          {/* User & Cart Icons */}
          <div className="flex items-center gap-4">
            {user ? (
              <UserDropdown
                user={user}
                isOpen={isUserDropdownOpen}
                onToggle={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                isScrolled={false}
              />
            ) : (
              <Link
                to="/auth/signup"
                className="p-2 rounded-lg text-white hover:text-blue-300 transition-colors duration-200"
              >
                <FaUser className="w-4 h-4" />
              </Link>
            )}

            <Link
              to="/cart"
              className="relative p-2 rounded-lg text-white hover:text-blue-300 transition-colors duration-200"
            >
              <FaShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={displayNavItems}
        user={user}
        fragranceItems={fragranceItems}
      />
    </>
  );
};

export default Navbar;