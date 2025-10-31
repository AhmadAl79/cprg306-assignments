"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, { ...item, name: item.name.trim() }]);
  }

  function handleItemSelect(item) {
    const cleaned = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s]/gu, ""); 
    setSelectedItemName(cleaned);
  }

  return (
    <main className="flex flex-col md:flex-row gap-6 p-6">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Week 8 – Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
