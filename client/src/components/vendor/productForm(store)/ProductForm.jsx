import React from "react";

const ProductForm = ({ index, register, errors }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
      <h4 className="font-medium text-gray-800 mb-3">Product {index + 1}</h4>

      <div className="grid gap-3">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Name
          </label>
          <input
            {...register(`products.${index}.name`)}
            className={`w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 ${
              errors.products?.[index]?.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter product name"
          />
          {errors.products?.[index]?.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.products[index].name.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Description
          </label>
          <textarea
            {...register(`products.${index}.description`)}
            className={`w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 ${
              errors.products?.[index]?.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter description"
          />
        </div>

        {/* Size & Count */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Size
            </label>
            <input
              {...register(`products.${index}.size`)}
              className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 border-gray-300"
              placeholder="e.g. Medium"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Count
            </label>
            <input
              type="number"
              {...register(`products.${index}.count`)}
              className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 border-gray-300"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {/* Upload */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Upload Photo
          </label>
          <input
            type="file"
            {...register(`products.${index}.file`)}
            className="w-full border rounded-md p-2 text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
