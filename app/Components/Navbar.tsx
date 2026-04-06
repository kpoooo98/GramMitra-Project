"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <div className="flex justify-between items-center px-6 py-4 text-white">

      {/* LOGO */}
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold text-green-400 cursor-pointer"
      >
        GramMitra
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-6">
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/about")}>About</button>
        <button onClick={() => router.push("/services")}>Services</button>
        <button onClick={() => router.push("/contact")}>Contact</button>
      </div>

      {/* SHOW LOGIN/SIGNUP ONLY ON HOME */}
      {isHome && (
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/login")}
            className="border px-4 py-1 rounded"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="bg-green-500 px-4 py-1 rounded"
          >
            Sign Up
          </button>
        </div>
      )}

    </div>
  );
}