"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation

export default function AddMenu() {
  const [newMenu, setNewMenu] = useState({ name: "", description: "" });
  const router = useRouter(); // Initialize useRouter for navigation

  // Add a new menu
  const addMenu = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/menus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMenu),
    });
    const createdMenu = await res.json();
    if (res.ok) {
      alert("Menu added successfully!");
      setNewMenu({ name: "", description: "" });
    } else {
      alert(`Error: ${createdMenu.message}`);
    }
  };

  // Navigate to the Add Item page
  const goToAddItem = () => {
    router.push("/add-item"); // Navigates to /add-item
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Menu</h1>
      <form onSubmit={addMenu} className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Menu Name"
            value={newMenu.name}
            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Menu Description"
            value={newMenu.description}
            onChange={(e) =>
              setNewMenu({ ...newMenu, description: e.target.value })
            }
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-500 text-white px-4 py-2 rounded-md w-full hover:bg-gray-600"
        >
          Add Menu
        </button>
      </form>

      {/* Add Item Button */}
      <div className="mt-6 text-center">
        <button
          onClick={goToAddItem}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
