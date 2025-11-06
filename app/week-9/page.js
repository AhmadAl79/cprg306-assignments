"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week9Landing() {
  const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (loading) return <p className="p-6">Loading…</p>;

  return (
    <main className="p-6 space-y-4">
      {!user ? (
        <>
          <h1 className="text-2xl font-bold">Week 9 — Login</h1>
          <button
            onClick={gitHubSignIn}
            className="border px-4 py-2 rounded hover:bg-gray-50"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p>
            Hello, <strong>{user.displayName || user.email}</strong>
          </p>
          <div className="flex gap-3">
            <Link
              href="/week-9/shopping-list"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={firebaseSignOut}
              className="border px-4 py-2 rounded hover:bg-gray-50"
            >
              Log out
            </button>
          </div>
        </>
      )}
    </main>
  );
}
