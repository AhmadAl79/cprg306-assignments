"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";


function Item({ name, quantity, category, onSelect }) {
  return (
    <li className="border rounded p-3 mb-2 flex justify-between">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600">
          Qty: {quantity} · {category}
        </div>
      </div>
      <button
        onClick={onSelect}
        className="border px-2 py-1 rounded hover:bg-gray-50"
      >
        Select
      </button>
    </li>
  );
}

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const sorted = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <section className="max-w-xl mx-auto w-full">
      <div className="flex gap-2 justify-center mb-3">
        <button
          onClick={() => setSortBy("name")}
          className="border px-2 py-1 rounded"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="border px-2 py-1 rounded"
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
            onSelect={() => onItemSelect(it)}
          />
        ))}
      </ul>
    </section>
  );
}

function NewItem({ onAdd }) {
  const CATEGORIES = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return alert("Please enter an item name.");
    onAdd({ name: trimmed, quantity: Number(quantity) || 1, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto w-full grid grid-cols-1 sm:grid-cols-4 gap-2"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border rounded px-3 py-2 col-span-2"
      />
      <input
        type="number"
        min={1}
        max={99}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-3 py-2"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="border rounded px-4 py-2 sm:col-span-4 hover:bg-gray-50"
      >
        Add Item
      </button>
    </form>
  );
}




export default function ShoppingListProtected() {
  const { user, loading, firebaseSignOut } = useUserAuth();

  if (loading) return <p className="p-6">Loading…</p>;
  if (!user) {
    return (
      <main className="p-6 space-y-3">
        <h1 className="text-xl font-semibold">Access denied</h1>
        <p>Please sign in first.</p>
        <Link
          href="/week-9"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Go to Login
        </Link>
      </main>
    );
  }

  const [items, setItems] = useState([
    { id: 1, name: "Apples", quantity: 5, category: "produce" },
    { id: 2, name: "Milk", quantity: 2, category: "dairy" },
    { id: 3, name: "Bread", quantity: 1, category: "bakery" },
  ]);

  const handleAdd = (item) => {
    const id = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    setItems([...items, { id, ...item }]);
  };

  const handleSelect = (item) => {
    alert(
      `Selected: ${item.name}\nQty: ${item.quantity}\nCategory: ${item.category}`
    );
  };

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <button
          onClick={firebaseSignOut}
          className="border px-3 py-1 rounded hover:bg-gray-50"
        >
          Log out
        </button>
      </div>

      <NewItem onAdd={handleAdd} />
      <ItemList items={items} onItemSelect={handleSelect} />
    </main>
  );
}
