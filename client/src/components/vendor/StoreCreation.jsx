import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { storeSchema } from "../../lib/vendor/validation"; // adjust path if needed
// import VendorNavbar from "./VendorNavbar";

const StoreCreation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      storeName: "",
      categoryType: "Multiple Categories",
      numCategories: 2,
      categories: [],
    },
  });

  // handle multi-select dropdown manually
  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setValue("categories", selected);
  };

  const onSubmit = (data) => {
    console.log("✅ Store Created:", data);
    alert("Store created successfully!");
    reset(); // optional: reset form after submission
  };

  return (
    <>
      {/* <VendorNavbar /> */}
      <div className="min-h-screen bg-white text-gray-800 flex flex-col px-8 md:px-24 py-10">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-semibold mb-1">Create Store</h1>
          <p className="text-sm text-gray-500 mb-10">
            Kindly fill out the basic details of your store below.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 max-w-2xl w-full"
        >
          {/* Store Name */}
          <div>
            <label
              htmlFor="storeName"
              className="block text-sm font-medium mb-2"
            >
              Store Name
            </label>
            <input
              id="storeName"
              {...register("storeName")}
              placeholder="Enter store name"
              className={`border rounded-md px-3 py-2 w-full text-sm transition-all focus:outline-none focus:ring-1 ${
                errors.storeName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.storeName && (
              <p className="text-xs text-red-500 mt-1">
                ⚠️ {errors.storeName.message}
              </p>
            )}
          </div>

          {/* Category Type + Number of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Type */}
            <div>
              <label
                htmlFor="categoryType"
                className="block text-sm font-medium mb-2"
              >
                Category Type
              </label>
              <select
                id="categoryType"
                {...register("categoryType")}
                className={`border-2 border-gray-400 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all ${
                  errors.categoryType
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-green-500"
                }`}
              >
                <option value="Single Category">Single Category</option>
                <option value="Multiple Categories">Multiple Categories</option>
              </select>
              {errors.categoryType && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.categoryType.message}
                </p>
              )}
            </div>

            {/* Number of Categories */}
            <div>
              <label
                htmlFor="numCategories"
                className="block text-sm font-medium mb-2"
              >
                No. of Categories
              </label>
              <input
                id="numCategories"
                type="number"
                {...register("numCategories", { valueAsNumber: true })}
                className={`border rounded-md px-3 py-2 w-full text-sm transition-all focus:outline-none focus:ring-1 ${
                  errors.numCategories
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-green-500"
                }`}
              />
              {errors.numCategories && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.numCategories.message}
                </p>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-15">
            <label
              htmlFor="categories"
              className="block text-sm font-medium mb-2"
            >
              Categories
            </label>
            <select
              id="categories"
              multiple
              {...register("categories")}
              onChange={handleCategoryChange}
              className={`border rounded-md px-3 py-2 w-full text-sm transition-all focus:outline-none focus:ring-1 h-28 ${
                errors.categories
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            >
              <option value="Smart Phones">Smart Phones</option>
              <option value="Bags">Bags</option>
              <option value="Shoes">Shoes</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Watches">Watches</option>
              <option value="Laptops">Laptops</option>
              <option value="Accessories">Accessories</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Furniture">Furniture</option>
              <option value="Beauty & Personal Care">
                Beauty & Personal Care
              </option>
              <option value="Sports & Fitness">Sports & Fitness</option>
              <option value="Books">Books</option>
              <option value="Toys & Games">Toys & Games</option>
              <option value="Groceries">Groceries</option>
              <option value="Automotive">Automotive</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Pet Supplies">Pet Supplies</option>
              <option value="Garden & Outdoor">Garden & Outdoor</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">
              Select maximum of two categories.
            </p>
            {errors.categories && (
              <p className="text-xs text-red-500 mt-1">
                {errors.categories.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2.5 rounded-md shadow-sm transition-all duration-200"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StoreCreation;
