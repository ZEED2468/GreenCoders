import React from "react";
import { Controller } from "react-hook-form";

export default function CategorySelector({ control, errors, defaultCategories }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Select Category</h2>
      <div className="bg-white p-4 rounded border">
        <Controller
          control={control}
          name="categories"
          render={({ field }) => (
            <select
              {...field}
              className="w-full rounded-md border px-3 py-2 text-sm bg-white shadow-sm"
            >
              <option value="">Select a category</option>
              {defaultCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        />
        <p className="text-xs text-red-500 mt-2">{errors.categories?.message}</p>
      </div>
    </div>
  );
}
