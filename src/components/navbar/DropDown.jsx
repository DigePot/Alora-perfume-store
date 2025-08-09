import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaShoppingBag, FaHeart, FaCog, FaSignOutAlt, FaChevronDown, FaShieldAlt } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { userMenuItems } from './NavConfig'

const UserDropdown = ({ user, isOpen, onToggle, isScrolled }) => {
  const dropdownRef = useRef(null)
  const { logout } = useAuth()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        onToggle()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  const handleLogout = () => {
    logout()
    onToggle()
  }

  const getIcon = (iconName) => {
    const icons = {
      user: FaUser,
      bag: FaShoppingBag,
      heart: FaHeart,
      cog: FaCog,
      shield: FaShieldAlt
    }
    const Icon = icons[iconName] || FaUser
    return <Icon className="w-4 h-4" />
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 text-white hover:text-blue-300"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
          {user.name?.charAt(0).toUpperCase() || 'U'}
        </div>
        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-[#1e3a8a] rounded-lg shadow-lg border border-blue-700/30 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-blue-700/30">
            <p className="text-sm font-medium text-white">{user.name || 'User'}</p>
            <p className="text-sm text-blue-200">{user.email}</p>
          </div>
          
          {/* Menu Items */}
          <div className="py-2">
            {userMenuItems.authenticated.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-blue-300 transition-colors duration-200"
                onClick={onToggle}
              >
                {getIcon(item.icon)}
                {item.name}
              </Link>
            ))}
            
            {/* Admin Menu Items */}
            {user.role === 'admin' && (
              <>
                <div className="border-t border-blue-700/30 my-2"></div>
                {userMenuItems.admin.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-blue-300 hover:text-blue-200 transition-colors duration-200"
                    onClick={onToggle}
                  >
                    {getIcon(item.icon)}
                    {item.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          
          {/* Logout */}
          <div className="border-t border-blue-700/30 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 w-full text-left transition-colors duration-200"
            >
              <FaSignOutAlt className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDropdown