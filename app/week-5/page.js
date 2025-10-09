import NewItem from "./new-item";

export default function Week5Page() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">Week 5</h1>

     
      <div className="mx-auto max-w-2xl rounded-xl border border-gray-300 p-6 shadow-sm">
        <NewItem />
      </div>
    </main>
  );
}
