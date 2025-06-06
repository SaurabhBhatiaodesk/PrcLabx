"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const brands: string[] = [
  "APPLE",
  "SAMSUNG PHONES",
  "SAMSUNG TABLETS",
  "ONEPLUS",
  "GOOGLE",
  "OPPO",
  "XIAOMI",
  "SONY",
  "HUAWEI",
  "VIVO",
  "REALME",
  "NOKIA",
  "LG",
  "MOTOROLA",
  "ASUS",
  "LENOVO",
  "MICROSOFT",
  "BLACKBERRY",
  "ZTE",
  "HONOR",
  "HTC",
];

const colors: string[] = [
  "bg-yellow-300",
  "bg-sky-400",
  "bg-green-300",
  "bg-orange-400",
  "bg-lime-600",
  "bg-indigo-400",
  "bg-gray-400",
  "bg-yellow-300",
  "bg-pink-400",
  "bg-purple-200",
  "bg-rose-300",
  "bg-cyan-300",
  "bg-pink-200",
  "bg-violet-300",
  "bg-teal-300",
  "bg-amber-300",
  "bg-lime-400",
  "bg-red-300",
  "bg-cyan-400",
  "bg-purple-300",
  "bg-slate-400",
];

const Brands: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedBrands = showAll ? brands : brands.slice(0, 10);

useEffect(() => {
  const fetchBrands = async () => {
    try {
      const api = "https://www.prc.repair/api/getbrands";
      const res = await fetch(api);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();  // Parse JSON here
      console.log("brands data:", data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  fetchBrands();
}, []);

  // Helper function to create URL-friendly slugs from brand names
  const slugify = (text: string): string =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dash
      .replace(/[^\w-]+/g, ""); // Remove non-word chars

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="font-bold text-green-700 text-xl mb-6 uppercase">
        CLICK TO GET AN INSTANT QUOTE NOW!
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {displayedBrands.map((brand, index) => (
          <Link key={brand} href={`/brands/${slugify(brand)}`}>
            <span
              className={`flex items-center justify-center h-20 rounded-md shadow cursor-pointer font-semibold text-black uppercase ${colors[index % colors.length]}`}
            >
              {brand}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-green-700 font-semibold hover:underline"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Brands;
