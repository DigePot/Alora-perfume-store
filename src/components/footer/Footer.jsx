"use client";

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { footerLinks, socialLinks } from '../navbar/NavConfig';

const Footer = () => {
  return (
    <footer className="bg-[#07263c] text-gray-300 px-6 py-16 mt-24 relative">
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

        {/* Column 2: Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.shop.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white transition">
                  {link.name}
                </Link>
              </li>
            ))}
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
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                className="text-gray-400 hover:text-white transition" 
                aria-label={social.name}
              >
                {social.icon === 'instagram' && <FaInstagram size={20} />}
                {social.icon === 'facebook' && <FaFacebook size={20} />}
                {social.icon === 'twitter' && <FaTiktok size={20} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;