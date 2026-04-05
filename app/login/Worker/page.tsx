"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function WorkerLogin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard/worker");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Worker Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg text-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg text-black"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          New worker?{" "}
          <Link
            href="/register/worker"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}