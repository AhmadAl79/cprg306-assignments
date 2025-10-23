"use client";

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
      <div>
        <div className="font-medium">{String(name).trim()}</div>
        <div className="text-sm text-gray-500">
          Qty: {quantity} • <span className="capitalize">{category}</span>
        </div>
      </div>
    </li>
  );
}
