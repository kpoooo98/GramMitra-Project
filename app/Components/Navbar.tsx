"use client";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-600">
        GramMitra
      </h1>

      <div className="flex gap-6 text-gray-600">
        <button className="hover:text-green-600">Home</button>
        <button className="hover:text-green-600">Profile</button>
        <button className="text-red-500">Logout</button>
      </div>
    </div>
  );
}