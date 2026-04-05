"use client";

import { useRouter } from "next/navigation";

export default function UserRegister() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("User account created!");
    router.push("/login/user");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          User Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg text-black" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg text-black" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg text-black" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}