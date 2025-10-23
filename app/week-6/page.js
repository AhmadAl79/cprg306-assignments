"use client";

import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
