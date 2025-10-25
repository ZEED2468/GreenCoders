import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductStoreSchema } from "../../../lib/vendor/validation";
import CategorySelector from "./CategorySelector";
import ProductForm from "./ProductForm";

export default function CreateStoreForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductStoreSchema),
    defaultValues: {
      storeName: "",
      categoryType: "Single Category",
      categories: [],
      products: [{ name: "", description: "", size: "", count: "", file: null }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = (data) => {
    console.log("✅ Store created:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-sm"
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create Store</h1>
      <p className="text-gray-500 mb-8">
        Kindly fill out the basic details of your store below.
      </p>

      {/* Store Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Store Name
        </label>
        <input
          {...register("storeName")}
          placeholder="Enter store name"
          className={`border-2 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-1 ${
            errors.storeName
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-green-500"
          }`}
        />
        {errors.storeName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.storeName.message}
          </p>
        )}
      </div>

      {/* Category Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Type
        </label>
        <select
          {...register("categoryType")}
          className="border-2 border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:ring-green-500 focus:border-green-500"
        >
          <option value="Single Category">Single Category</option>
          <option value="Multiple Categories">Multiple Categories</option>
        </select>
      </div>

      {/* Category Selector */}
      <CategorySelector register={register} errors={errors} />

      {/* Product Details */}
      <div className="border rounded-lg p-5 mb-8 bg-gray-50">
        <h2 className="font-semibold text-gray-800 mb-4">Input Product Details</h2>
        {fields.map((field, index) => (
          <ProductForm
            key={field.id}
            index={index}
            register={register}
            errors={errors}
          />
        ))}
        <button
          type="button"
          onClick={() => append({ name: "", description: "", size: "", count: "", file: null })}
          className="text-green-600 text-sm font-medium hover:underline mt-2"
        >
          + Add More Products
        </button>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-600 px-5 py-2 rounded-md hover:bg-gray-100"
        >
          Continue
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
        >
          Create Store
        </button>
      </div>
    </form>
  );
}
