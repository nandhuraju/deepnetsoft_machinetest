"use client";

import { useState, useEffect } from "react";

export default function AddItem() {
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "", // New field for image link
  });

  // Fetch menus on component load
  useEffect(() => {
    fetch("/api/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  // Add new item to the selected menu
  const addItem = async (e) => {
    e.preventDefault();
    if (!selectedMenuId) {
      alert("Please select a menu.");
      return;
    }
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newItem, menuId: selectedMenuId }),
    });
    if (res.ok) {
      alert("Item added successfully!");
      setNewItem({ name: "", description: "", price: "", imageUrl: "" }); // Reset form
    } else {
      alert("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Item</h1>
      <p className="text-gray-600 mb-6 text-center">
        Select a menu and add a new item to it.
      </p>

      <form
        onSubmit={addItem}
        className="mb-6 bg-white p-4 rounded-lg shadow-md max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Menu</label>
          <select
            value={selectedMenuId}
            onChange={(e) => setSelectedMenuId(e.target.value)}
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Choose a menu
            </option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Item Name</label>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Item Description</label>
          <textarea
            placeholder="Item Description"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            type="url"
            placeholder="Image URL"
            value={newItem.imageUrl}
            onChange={(e) =>
              setNewItem({ ...newItem, imageUrl: e.target.value })
            }
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
