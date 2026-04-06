"use client";

import "./globals.css";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>

        {/* 🔝 GLOBAL NAVBAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-black text-white">

          <h1
            onClick={() => router.push("/")}
            className="text-xl font-bold text-green-400 cursor-pointer"
          >
            GramMitra
          </h1>

          <div className="flex gap-6">
            <button onClick={() => router.push("/")}>Home</button>
            <button onClick={() => router.push("/about")}>About</button>
            <button onClick={() => router.push("/services")}>Services</button>
            <button onClick={() => router.push("/contact")}>Contact</button>
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push("/login")}>
              Login
            </button>
            <button onClick={() => router.push("/signup")}>
              Sign Up
            </button>
          </div>

        </div>

        {/* 📄 PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}