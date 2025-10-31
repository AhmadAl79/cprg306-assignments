"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState({
    id: "",
    name: "",
    quantity: 1,
    category: "produce",
  });

  const generateId = () =>
    Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).substring(2, 6).toUpperCase();

  function handleSubmit(e) {
    e.preventDefault();
    if (!item.name.trim()) return;

    const newItem = { ...item, id: generateId() };
    onAddItem(newItem);
    console.log("Added:", newItem);

    setItem({ id: "", name: "", quantity: 1, category: "produce" });
  }

  const increment = () => {
    setItem(prev =>
      prev.quantity < 20 ? { ...prev, quantity: prev.quantity + 1 } : prev
    );
  };

  const decrement = () => {
    setItem(prev =>
      prev.quantity > 1 ? { ...prev, quantity: prev.quantity - 1 } : prev
    );
  };

  return (
    <main>
      <div className="flex mx-auto w-fit h-full rounded-md">
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-4 gap-3 flex flex-col text-black bg-white w-100 p-4"
        >
          <input
            className="border border-gray-300 rounded p-2"
            type="text"
            placeholder="Item Name"
            required
            value={item.name}
            onChange={e => setItem({ ...item, name: e.target.value })}
          />

          <div className="flex justify-between">
            <div>
              <input
                className="w-12 m-2 text-2xl font-extrabold text-center border border-black rounded"
                type="text"
                readOnly
                value={item.quantity}
              />
              <button
                type="button"
                onClick={decrement}
                className={`px-3 py-1 m-1 font-bold text-2xl rounded-sm text-white ${
                  item.quantity === 1
                    ? "cursor-not-allowed bg-gray-300"
                    : "bg-cyan-600"
                }`}
              >
                -
              </button>
              <button
                type="button"
                onClick={increment}
                className={`px-3 py-1 font-bold text-2xl rounded-sm text-white ${
                  item.quantity === 20
                    ? "cursor-not-allowed bg-gray-300"
                    : "bg-cyan-600"
                }`}
              >
                +
              </button>
            </div>

            <select
              className="border border-gray-300 rounded p-2"
              value={item.category}
              onChange={e =>
                setItem({ ...item, category: e.target.value })
              }
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="border w-1/2 mx-auto rounded-sm text-xl hover:bg-cyan-600 hover:text-white"
          >
            Add Item
          </button>
        </form>
      </div>
    </main>
  );
}
