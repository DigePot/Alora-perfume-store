import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FaUser, FaShoppingBag, FaHeart, FaCog, FaSignOutAlt, FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { userMenuItems } from './NavConfig';


const MobileMenu = ({ isOpen, onClose, navItems, user, fragranceItems }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const [openFragrance, setOpenFragrance] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    onClose();
  };

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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
      className={`lg:hidden fixed inset-y-0 left-0 w-80 max-w-full bg-transparent z-50 transform transition-transform duration-300 ease-in-out ${
       isOpen ? 'translate-x-0' : '-translate-x-full'
       } shadow-2xl overflow-y-auto`}
      >

        <div className="flex flex-col h-full">
          {/* Header - Removed background */}
          <div className="flex justify-between items-center p-6">
            <Link to="/" onClick={onClose} className="flex items-center">
            
            </Link>
            <button
              onClick={onClose}
              className="text-white hover:text-red-400 p-2 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
              style={{ background: 'none', border: 'none' }} 
            >
              <IoMdClose size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                 key={item.path}
                  to={item.path}
                   className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                       isActiveRoute(item.path)
                 ? 'text-blue-400 font-medium bg-blue-500/20'
                : 'text-white hover:text-blue-300 hover:bg-blue-900/30'
                 }`}
               onClick={onClose}
               >
              {item.name}
             </Link>

              ))}

              {/* Fragrance Dropdown - Removed background */}
              <div className="mb-2">
                <button
                  onClick={() => setOpenFragrance(!openFragrance)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                    isFragranceActive()
                      ? 'text-blue-400 font-medium' // Removed bg-blue-900/30
                      : 'text-white hover:text-blue-300' // Removed hover:bg-white/10
                  }`}
                  style={{ background: 'none', border: 'none' }} // Added this line
                >
                  <span>Fragrance</span>
                  <FaChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openFragrance ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFragrance && (
                  <div className="pl-4 mt-1 space-y-1">
                    {fragranceItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                          isActiveRoute(item.path)
                            ? 'text-blue-300' // Removed bg-blue-900/20
                            : 'text-gray-300 hover:text-blue-300' // Removed hover:bg-white/5
                        }`}
                        onClick={onClose}
                        style={{ background: 'none', border: 'none' }} // Added this line
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* User Section */}
            {user ? (
              <div className="border-t border-gray-800 mt-4 pt-4">
                <div className="flex items-center gap-3 mb-4 px-4 py-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-medium text-white">{user.name || 'User'}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>

                {userMenuItems.authenticated.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:text-blue-300 hover:bg-white/10 rounded-lg transition-all duration-200"
                    onClick={onClose}
                  >
                    {item.icon === 'user' && <FaUser className="w-4 h-4" />}
                    {item.icon === 'bag' && <FaShoppingBag className="w-4 h-4" />}
                    {item.icon === 'heart' && <FaHeart className="w-4 h-4" />}
                    {item.icon === 'cog' && <FaCog className="w-4 h-4" />}
                    {item.icon === 'shield' && <FaShieldAlt className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                ))}

                {user.role === 'admin' && (
                  <div className="mt-2">
                    {userMenuItems.admin.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-3 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20 rounded-lg transition-all duration-200"
                        onClick={onClose}
                      >
                        {item.icon === 'user' && <FaUser className="w-4 h-4" />}
                        {item.icon === 'bag' && <FaShoppingBag className="w-4 h-4" />}
                        {item.icon === 'heart' && <FaHeart className="w-4 h-4" />}
                        {item.icon === 'cog' && <FaCog className="w-4 h-4" />}
                        {item.icon === 'shield' && <FaShieldAlt className="w-4 h-4" />}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all duration-200 mt-2"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-800 mt-4 pt-4 space-y-3">
                <Link
                  to="/auth/login"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                  onClick={onClose}
                >
                  Log Out
                </Link>
               
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;