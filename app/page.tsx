"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

export default function HomePage() {
  const router = useRouter();

  const topServices = [
    { name: "Electrician", img: "/images/Electrician.jpg" },
    { name: "Plumber", img: "/images/Plumber.jpg" },
    { name: "Carpenter", img: "/images/carpenter.jpg" },
    { name: "Housekeeping", img: "/images/Homekeeping.jpg" },
    { name: "Salon", img: "/images/Parlour.jpg" },
    { name: "Babysitter", img: "/images/babysitter.jpg" },
    { name: "Tuition", img: "/images/Tution.jpg" },
    { name: "Grocery", img: "/images/Homekeeping.jpg" },
    { name: "AC Repair", img: "/images/Electrician.jpg" },
    { name: "Painter", img: "/images/carpenter.jpg" },
  ];

  return (
    <div className="relative min-h-screen">

      {/* 🌄 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/village.jpg')" }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ✅ NAVBAR */}
        <Navbar />

        {/* 🏷️ TITLE */}
        <div className="text-center mt-8">
          <h1 className="text-6xl font-bold text-green-400">
            GramMitra
          </h1>
          <p className="text-gray-200">
            Connecting Rural Skills to Local Demand
          </p>
        </div>

        {/* 🔍 SEARCH BAR */}
        <div className="flex justify-center mt-6 px-4">
          <div className="flex items-center bg-white rounded-full px-5 py-3 w-full max-w-xl shadow">
            <span className="text-gray-500 mr-2">🔍</span>
            <input
              placeholder="Search services like plumber, electrician..."
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* 🔥 TOP SERVICES GRID */}
        <div className="flex justify-center mt-10 px-4">
          <div className="grid grid-cols-5 gap-6">

            {topServices.map((item, i) => (
              <div
                key={i}
                onClick={() => router.push("/login")}
                className="text-center cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow flex items-center justify-center mx-auto hover:shadow-md transition">
                  <img
                    src={item.img}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <p className="text-white text-xs mt-2">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ⬇️ HOME APPLIANCES (JUSTDIAL STYLE) */}
        <div className="bg-white mt-40 px-10 py-10 rounded-t-3xl">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">
              Home Appliances
            </h2>
            <p className="text-gray-500 text-sm">
              Repair & maintenance services
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto">

            {[
              { name: "AC", icon: "❄️" },
              { name: "Fridge", icon: "🧊" },
              { name: "Washing Machine", icon: "🧺" },
              { name: "Microwave", icon: "🔥" },
              { name: "Geyser", icon: "🚿" },
              { name: "Water Purifier", icon: "💧" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center min-w-[100px] cursor-pointer"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center shadow hover:shadow-md transition">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  {item.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}