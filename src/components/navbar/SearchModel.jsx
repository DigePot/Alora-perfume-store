import React, { useState, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm)
      onClose()
    }
  }

  const popularSearches = ['Men Fragrance', 'Women Perfume', 'Best Sellers', 'Private Collection', 'New Arrivals']

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
      <div className="flex items-start justify-center pt-20 px-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Search Products</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleSearch}>
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for perfumes, fragrances..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg outline-none transition-all duration-200"
                  autoFocus
                />
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-200"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            {/* Popular Searches */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors duration-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal