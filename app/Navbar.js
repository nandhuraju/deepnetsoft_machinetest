"use client"; // Ensures the component is treated as a client component

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container mx-auto py-4 px-4">
        {/* Logo Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/assets/6860545013e0a63ba8cb7e94004971f7.png"
              alt="deepnetsoft"
              className="w-40 h-10"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 md:mt-0 md:flex md:justify-end md:items-center">
          <ul className="flex flex-col md:flex-row md:gap-8 gap-4 text-center">
            <li>
              <Link
                href="/"
                className="text-black hover:underline md:text-base text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-black hover:underline md:text-base text-xl"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/reservation"
                className="text-black hover:underline md:text-base text-xl"
              >
                Make a Reservation
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black hover:underline md:text-base text-xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
