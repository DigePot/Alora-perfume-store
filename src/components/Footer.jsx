"use client"

import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-16 mt-24 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Alora Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Alora</h2>
          <p className="text-sm text-gray-400">
            Signature scents for timeless elegance. Discover our crafted collection designed to inspire and captivate.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            <p>VAT Account Number: 302159873900003</p>
            <p className="mt-2">© {new Date().getFullYear()} Alora Fragrances. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2: Important Links (Shop) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/collections" className="hover:text-white transition">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/premium-collection" className="hover:text-white transition">
                Premium
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company (Contact Us) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex items-center gap-2">
              <span className="text-gray-400">📞</span> 920013740
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-400">📞</span> 920013740
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-400">📧</span> support@alora.com
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-full transition"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
