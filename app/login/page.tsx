"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSendOtp = async () => {
    if (!phone) {
      alert("Please enter phone number");
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
      alert("Error sending OTP");
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

      {/* CONTENT */}
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

          <h1 className="text-3xl font-bold mb-2">
            Login to your account
          </h1>

          <p className="text-sm mb-5">
            Enter your phone number to continue
          </p>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded mb-4 text-black outline-none"
          />

          {/* BUTTON */}
          <button
            onClick={handleSendOtp}
            className="w-full bg-green-500 py-3 rounded font-bold"
          >
            Send OTP
          </button>

          {/* SIGNUP LINK */}
          <p className="mt-4 text-sm">
            Don't have an account??
          </p>

          <button
            onClick={() => router.push("/signup")}
            className="mt-2 text-white underline"
          >
            Sign Up
          </button>

        </div>
      </div>
    </div>
  );
}