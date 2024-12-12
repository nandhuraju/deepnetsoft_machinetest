// app/page.js (or home.js)
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpeg')",
          opacity: 0.6, // Adjust opacity here
        }}
      ></div>

      {/* Main Content Section */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/add-menu">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Menu
            </button>
          </Link>
          <Link href="/add-item">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Add Item
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
