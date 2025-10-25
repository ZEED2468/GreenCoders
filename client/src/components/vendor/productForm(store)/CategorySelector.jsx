import React from "react";

const categories = [
  "Smart Phones",
  "Bags",
  "Shoes",
  "Electronics",
  "Clothing",
  "Watches",
  "Laptops",
  "Accessories",
  "Home Appliances",
  "Furniture",
];

export default function CategorySelector({ register, errors }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        Categories
      </label>
      <select
        multiple
        {...register("categories")}
        className={`border-2 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-1 ${
          errors.categories
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-green-500"
        }`}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {errors.categories && (
        <p className="text-red-500 text-xs mt-1">
          {errors.categories.message}
        </p>
      )}
    </div>
  );
}
