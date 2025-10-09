import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 space-y-4 text-center">
      <h1 className="text-2xl font-bold">
        CPRG 306: Web Development 2 – Assignments
      </h1>

      <p>
        <Link
          href="/week-2"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 2
        </Link>
      </p>

      <p>
        <Link
          href="/week-3"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 3
        </Link>
      </p>

      <p className="text-gray-600">
        Additional info: This is my assignment project setup.
      </p>
    </main>
  );
}
