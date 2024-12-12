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
          opacity: 0.5, // Adjust opacity here
        }}
      ></div>

      {/* Main Content Section */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
  
   
        <div className="w-full h-[2px] bg-gray-300 mb-8"></div>
        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <Link href="/add-menu">
            <button className="bg-black text-white text-xl px-8 py-4 mb-4 hover:bg-gray-500 transition-all duration-300">
              Add Menu
            </button>
          </Link>
          <Link href="/add-item">
            <button className="bg-black text-white text-xl px-8 py-4 hover:bg-gray-500 transition-all duration-300">
              Add Item
            </button>
          </Link>
        </div>

        {/* Line Below */}
        <div className="w-full h-[2px] bg-gray-300 mt-8"></div>
      </div>
    </div>
  );
}
