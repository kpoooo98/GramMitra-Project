"use client";

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  // Dummy services for now
  const services: any = {
    "Home Appliances": ["AC Repair", "Fridge", "Washing Machine"],
    "Electronics & Electrical": ["TV", "Mobile", "Laptop"],
    "Plumbing": ["Pipe Repair", "Leak Fix"],
    "Housekeeping": ["Cleaning", "Kitchen"],
    "Personal Services": ["Maid", "Cook", "Babysitter"],
    "Education": ["Tuition", "English"],
    "Construction": ["Carpenter", "Painter"],
  };

  const decodedCategory = decodeURIComponent(category as string);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-4">
        {decodedCategory}
      </h1>

      <div className="flex flex-wrap gap-3">
        {(services[decodedCategory] || ["No services available"]).map(
          (item: string, index: number) => (
            <div
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow cursor-pointer"
            >
              {item}
            </div>
          )
        )}
      </div>

    </div>
  );
}