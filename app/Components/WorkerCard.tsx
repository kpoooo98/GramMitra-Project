export default function WorkerCard({ worker }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      
      {/* Name (from User) */}
      <h2 className="text-lg font-bold">
        {worker.name || "Worker"}
      </h2>

      {/* Skills */}
      <p className="text-gray-600">
        {worker.skills?.join(", ")}
      </p>

      {/* Wage */}
      <p className="text-sm text-gray-500">
        ₹{worker.wage} / day
      </p>

      {/* Rating */}
      <p className="text-yellow-500">
        ⭐ {worker.rating} ({worker.totalReviews})
      </p>

      {/* Availability */}
      <p className={`text-sm ${worker.availability ? "text-green-600" : "text-red-500"}`}>
        {worker.availability ? "Available" : "Not Available"}
      </p>

      <button className="mt-3 w-full bg-green-500 text-white py-1 rounded">
        Contact
      </button>
    </div>
  );
}