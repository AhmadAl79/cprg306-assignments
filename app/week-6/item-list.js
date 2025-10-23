/*
Author: Ahmad Al Khodr
Description: Week 6 - Custom ItemList Component
Modified: 2025-10-15
*/

"use client";

import { useState } from "react";
import ItemData from "./items.json";
import Item from "./item";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(ItemData);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortClick = () => {
    const sortedItems = [...items].sort(compareItems);
    setItems(sortedItems);
  };

  const compareItems = (a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "quantity") {
      
      return b.quantity - a.quantity;
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="font-bold text-2xl">Sort By:</p>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="p-2 m-2 bg-gray-100 border border-gray-300 rounded-md"
        >
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="category">Category</option>
        </select>
        <button
          onClick={handleSortClick}
          className="p-2 border bg-gray-100 hover:bg-green-100 border-gray-300 rounded-md"
        >
          Sort Items
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1 w-1/3 text-center">
          {items.map((item, index) => (
            <Item key={index} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
