
"use client";

import { useState } from "react";

export default function Counter() {
  const MIN = 1;
  const MAX = 20;

  const [value, setValue] = useState(MIN);

  const dec = () => setValue((v) => Math.max(MIN, v - 1));
  const inc = () => setValue((v) => Math.min(MAX, v + 1));

  return (
    <div className="flex items-center justify-center gap-6">
      
      <input
        aria-label="counter value"
        value={value}
        readOnly
        className="w-28 text-center text-3xl font-semibold rounded-lg border px-4 py-2"
      />

      
      <button
        type="button"
        onClick={dec}
        disabled={value <= MIN}
        className="w-20 rounded-md border bg-gray-200 py-2 text-xl font-bold disabled:opacity-50"
      >
        –
      </button>

     
      <button
        type="button"
        onClick={inc}
        disabled={value >= MAX}
        className="w-20 rounded-md border bg-cyan-600 py-2 text-xl font-bold text-white disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
}

