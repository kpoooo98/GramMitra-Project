"use client";

import { useRouter } from "next/navigation";

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

        {/* 🔝 NAVBAR */}
        <div className="flex justify-between items-center px-6 py-4 text-white">
          <h1 className="text-2xl font-bold text-green-400">
            GramMitra
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/login")}
              className="border px-4 py-1 rounded"
            >
              Login
            </button>

<button
  onClick={() => router.push("/signup")}
  className="bg-green-500 text-white px-4 py-1 rounded"
>
  Sign Up
</button>
          </div>
        </div>

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

        {/* 🔥 5 x 2 GRID (YOUR MAIN REQUIREMENT) */}
        <div className="flex justify-center mt-10 px-4">
          <div className="grid grid-cols-5 gap-6">

            {topServices.map((item, i) => (
              <div
                key={i}
                onClick={() => router.push("/login")}
                className="text-center cursor-pointer"
              >

                {/* BOX */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow flex items-center justify-center mx-auto hover:shadow-md transition">
                  <img
                    src={item.img}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* TEXT */}
                <p className="text-white text-xs mt-2">
                  {item.name}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* ⬇️ WHITE SECTION (LIKE JUSTDIAL) */}
        <div className="bg-white mt-16 px-10 py-10 rounded-t-3xl">

          {/* SECTION HEADER */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">
                Home Appliances
              </h2>
              <p className="text-gray-500 text-sm">
                Repair & maintenance services
              </p>
            </div>

            <button className="text-blue-500 text-sm">
              Explore More
            </button>
          </div>

          {/* RIGHT SIDE BOXES (LIKE BILL SECTION) */}
          <div className="flex gap-6">

            {[
              "AC",
              "Fridge",
              "Washing Machine",
              "Microwave",
              "Geyser",
              "Water Purifier",
            ].map((item, i) => (
              <div key={i} className="text-center">

                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center shadow">
                  <span className="text-xl">🔧</span>
                </div>

                <p className="mt-2 text-sm">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}