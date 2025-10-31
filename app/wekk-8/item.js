export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="my-3 p-4 rounded-xl bg-gray-100 text-center cursor-pointer hover:bg-gray-200"
    >
      <h3 className="text-xl font-semibold">{name.trim()}</h3>
      <div className="mt-2 flex gap-8 justify-center text-sm">
        <p><span className="font-bold">Qty:</span> {quantity}</p>
        <p><span className="font-bold">Category:</span> {category}</p>
      </div>
    </li>
  );
}
