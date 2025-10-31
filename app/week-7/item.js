
export default function Item({ name, quantity, category }) {
  return (
    <li className="my-3 p-4 rounded-xl bg-gray-100 text-center">
      <h3 className="text-xl font-semibold">{name.trim()}</h3>
      <div className="mt-2 flex gap-8 justify-center text-sm">
        <p><span className="font-bold">Quantity:</span> {quantity}</p>
        <p><span className="font-bold">Category:</span> {category}</p>
      </div>
    </li>
  );
}
