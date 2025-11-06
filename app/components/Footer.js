"use client";

import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* --- Left: Brand --- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">🎬 VideoWorld</h2>
          <p className="text-sm text-gray-400">
            Explore trending, viral, and entertaining videos — all in one place!
          </p>
        </div>

        {/* --- Middle: Navigation --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* --- Right: Socials --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500"><FaYoutube size={22} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={22} /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebookF size={22} /></a>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} VideoWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
