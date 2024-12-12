"use client";
import { useState, useEffect, useRef } from "react";

export default function Menu() {
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);

  // Fetch menus
  useEffect(() => {
    fetch("/api/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  // Fetch items for the selected menu
  useEffect(() => {
    if (selectedMenuId) {
      fetch(`/api/items?menuId=${selectedMenuId}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
    }
  }, [selectedMenuId]);

  // Scroll container horizontally
  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpeg')",
          opacity: 0.6,
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Menus */}
        <div className="mb-6 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-xl font-semibold mb-4 text-center">MENU</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {menus.map((menu) => (
              <button
                key={menu._id}
                className={`px-4 py-2 rounded-md shadow-md ${
                  selectedMenuId === menu._id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedMenuId(menu._id)}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        {selectedMenuId && (
          <div className="relative bg-white bg-opacity-90 p-4 rounded-lg shadow-md max-w-4xl w-full mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Items for Selected Menu
            </h2>

            {/* Arrows for scrolling */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
              onClick={() => scrollContainer("left")}
            >
              ◀
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
              onClick={() => scrollContainer("right")}
            >
              ▶
            </button>

            {/* Item List */}
            <div
              ref={containerRef}
              className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide"
            >
              {items.map((item) => (
                <div
                  key={item._id}
                  className="min-w-[250px] max-w-[250px] bg-gray-100 rounded-lg shadow-md p-4 flex-shrink-0"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-bold text-blue-500 mt-2">₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
