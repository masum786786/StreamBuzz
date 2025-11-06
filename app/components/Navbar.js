"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, PlayCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/Links/Admin" }, // admin link
  ];

  // Function to handle navigation
  const handleNavClick = (link) => {
    if (link.name === "Admin") {
      const password = prompt("Enter admin password:");
      if (password === "1234") {
        router.push(link.href);
      } else {
        alert("Incorrect password!");
      }
    } else {
      router.push(link.href);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <PlayCircle className="text-white w-8 h-8" />
            <Link href="/" className="text-white text-2xl font-extrabold tracking-wide">
              Stream<span className="text-yellow-400">Buzz</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white space-y-3 px-6 py-4 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="block font-medium hover:text-yellow-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
