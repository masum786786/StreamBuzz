"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PlayCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <PlayCircle className="text-white w-8 h-8" />
            <Link
              href="/"
              className="text-white text-2xl font-extrabold tracking-wide"
            >
              Stream<span className="text-yellow-400">Buzz</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/Links/ComingSoon"
              className="text-white font-medium hover:text-yellow-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/Links/ComingSoon"
              className="text-white font-medium hover:text-yellow-300 transition-all duration-300"
            >
              VIP
            </Link>
            <Link
              href="/Links/ComingSoon"
              className="text-white font-medium hover:text-yellow-300 transition-all duration-300"
            >
              Add Video
            </Link>
            <Link
              href="/Links/ComingSoon"
              className="text-white font-medium hover:text-yellow-300 transition-all duration-300"
            >
              Update Video
            </Link>
            <Link
              href="/Links/ComingSoon"
              className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white space-y-3 px-6 py-4 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block font-medium hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            href="/vip"
            onClick={() => setMenuOpen(false)}
            className="block font-medium hover:text-yellow-300"
          >
            VIP
          </Link>
          <Link
            href="/add"
            onClick={() => setMenuOpen(false)}
            className="block font-medium hover:text-yellow-300"
          >
            Add Video
          </Link>
          <Link
            href="/update"
            onClick={() => setMenuOpen(false)}
            className="block font-medium hover:text-yellow-300"
          >
            Update Video
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
