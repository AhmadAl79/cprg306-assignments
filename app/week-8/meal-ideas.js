"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Meal Ideas for: {ingredient || "—"}</h2>
      {!ingredient && <p>Select an item to view meal ideas.</p>}
      <ul className="grid grid-cols-2 gap-4">
        {meals.map((m) => (
          <li key={m.idMeal} className="border rounded p-2">
            <img src={m.strMealThumb} alt={m.strMeal} className="rounded" />
            <p className="font-semibold mt-2">{m.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
