"use client"; // Ensures that the component is treated as a client component

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/6860545013e0a63ba8cb7e94004971f7.png"
            alt="deepnetsoft"
            className="w-40 h-10"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:flex gap-6 py-4 md:py-0 pl-4 md:pl-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:py-0 py-2">
            <Link
              href="/"
              className="block text-black hover:underline"
              onClick={handleLinkClick} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li className="md:py-0 py-2">
            <Link
              href="/menu"
              className="block text-black hover:underline"
              onClick={handleLinkClick} // Close menu on link click
            >
              Menu
            </Link>
          </li>
          <li className="md:py-0 py-2">
            <Link
              href="/reservation"
              className="block text-black hover:underline"
              onClick={handleLinkClick} // Close menu on link click
            >
              Make a Reservation
            </Link>
          </li>
          <li className="md:py-0 py-2">
            <Link
              href="/contact"
              className="block text-black hover:underline"
              onClick={handleLinkClick} // Close menu on link click
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
