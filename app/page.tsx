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

      <p>
        <Link
          href="/week-4"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 4
        </Link>
      </p>

      <p>
        <Link
          href="/week-5"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 5
        </Link>
      </p>

      <p>
        <Link
          href="/week-6"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 6
        </Link>
      </p>

      <p>
        <Link
          href="/week-7"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 7
        </Link>
      </p>

      <p>
        <Link
          href="/week-8"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 8
        </Link>
      </p>

      <p>
        <Link
          href="/week-9"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Week 9
        </Link>
      </p>

      <p className="text-gray-600">
        Additional info: This is my assignment project setup.
      </p>
    </main>
  );
}
