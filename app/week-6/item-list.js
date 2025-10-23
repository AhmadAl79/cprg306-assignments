/*
Author: Ahmad Al Khodr
Description: Week 6 - ItemList (JSON + sorting)
Modified: 2025-10-23
*/

"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); 

  const sorted = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-2 rounded border ${sortBy === "name" ? "bg-green-100" : "bg-gray-100"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-2 rounded border ${sortBy === "category" ? "bg-green-100" : "bg-gray-100"}`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sorted.map((it) => (
          <Item
            key={it.id}
            name={it.name}
            quantity={it.quantity}
            category={it.category}
          />
        ))}
      </ul>
    </section>
  );
}
