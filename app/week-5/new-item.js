"use client";

import { useState } from "react";

const CATEGORIES = [
  "produce", "dairy", "bakery", "meat", "frozen foods",
  "canned goods", "dry goods", "beverages", "snacks", "household", "other",
];

export default function NewItem() {
  const MIN = 1, MAX = 20;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(MIN);
  const [category, setCategory] = useState("produce");

  const clamp = (n) => Math.max(MIN, Math.min(MAX, Number(n) || MIN));
  const inc   = () => setQuantity((q) => clamp(q + 1));
  const dec   = () => setQuantity((q) => clamp(q - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name: name.trim(), quantity, category };

    if (!item.name) return alert("Please enter an item name.");

    console.log(item); 

    alert(
      `New Item\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );

    setName("");
    setQuantity(MIN);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        aria-label="Item Name"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-600"
        required
        type="text"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="flex items-center justify-center gap-3">
          <p
            aria-label="Quantity"
            className="w-20 text-center text-3xl font-bold rounded-lg border border-gray-800/60 px-2 py-1 select-none"
          >
            {quantity}
          </p>

          <button
            type="button"
            onClick={dec}
            disabled={quantity <= MIN}
            className="w-14 rounded-md bg-cyan-700 text-white text-xl font-bold py-2 disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            –
          </button>

          <button
            type="button"
            onClick={inc}
            disabled={quantity >= MAX}
            className="w-14 rounded-md bg-gray-300 text-gray-700 text-xl font-bold py-2 disabled:opacity-50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

       
        <select
          aria-label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-600"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-md border border-gray-800 px-6 py-2 text-lg font-semibold hover:bg-gray-50 active:scale-[.99]"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
