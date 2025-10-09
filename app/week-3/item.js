
export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-between items-center rounded-xl border border-gray-200 p-3 bg-white shadow-sm">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
      <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-lg">
        Qty: {quantity}
      </span>
    </div>
  );
}
