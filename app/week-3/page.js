
import ItemList from "./item-list";

export default function Week3Page() {
  return (
    <main className="mx-auto max-w-xl p-6 space-y-5">
      <h1 className="text-2xl font-bold text-center">Week 3 — Shopping List</h1>
      <p className="text-center text-gray-500">
        This page displays a list of grocery items using React components.
      </p>
      <ItemList />
    </main>
  );
}
