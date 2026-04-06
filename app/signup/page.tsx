"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async () => {
    if (!name || !phone) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8081/auth/send-otp?phone=${phone}`,
        { method: "POST" }
      );

      const data = await res.text();
      alert(data);

      router.push(`/verify-otp?phone=${phone}`);
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/village.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-screen">

        {/* BACK BUTTON */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-5 right-5 bg-white text-black px-4 py-1 rounded"
        >
          Back
        </button>

        {/* CARD */}
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl w-[350px] text-center text-white">

          <h1 className="text-3xl font-bold mb-4">
            Create Account
          </h1>

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded mb-3 text-black outline-none"
          />

          {/* PHONE */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded mb-4 text-black outline-none"
          />

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            className="w-full bg-green-500 py-3 rounded font-bold"
          >
            Sign Up
          </button>

          {/* LOGIN LINK */}
          <p className="mt-4 text-sm">
            Already have an account?
          </p>

          <button
            onClick={() => router.push("/login")}
            className="mt-2 text-white underline"
          >
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}