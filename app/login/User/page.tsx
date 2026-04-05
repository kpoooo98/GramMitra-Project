"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function UserLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard/user");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          User Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          New user?{" "}
          <Link
            href="/register/user"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}