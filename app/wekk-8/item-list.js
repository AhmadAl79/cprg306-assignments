"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const sorted = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex gap-2 justify-center mb-3">
        <button onClick={() => setSortBy("name")} className="border px-2 py-1 rounded">
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} className="border px-2 py-1 rounded">
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
            onSelect={() => onItemSelect(it)}
          />
        ))}
      </ul>
    </section>
  );
}

