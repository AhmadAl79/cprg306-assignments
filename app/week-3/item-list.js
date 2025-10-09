
import Item from "./item";

export default function ItemList() {
  const items = [
    { id: 1, name: "Apples", quantity: 6, category: "produce" },
    { id: 2, name: "Milk (4L)", quantity: 1, category: "dairy" },
    { id: 3, name: "Bread", quantity: 2, category: "bakery" },
    { id: 4, name: "Eggs (dozen)", quantity: 1, category: "dairy" },
    { id: 5, name: "Bananas", quantity: 5, category: "produce" },
    { id: 6, name: "Broccoli", quantity: 2, category: "produce" },
    { id: 7, name: "Chicken Breast (1kg)", quantity: 1, category: "meat" },
    { id: 8, name: "Pasta Sauce", quantity: 2, category: "canned goods" },
    { id: 9, name: "Spaghetti (454g)", quantity: 1, category: "dry goods" },
    { id: 10, name: "Toilet Paper (12pk)", quantity: 1, category: "household" },
    { id: 11, name: "Paper Towels (6pk)", quantity: 1, category: "household" },
    { id: 12, name: "Dish Soap", quantity: 1, category: "household" },
  ];

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
