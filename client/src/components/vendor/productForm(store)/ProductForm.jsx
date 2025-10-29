import React from "react";

export default function ProductForm({
  cat,
  index,
  register,
  errors,
  item,
  helpers,
  uploadState,
  handleFileSelect,
  setUploadState,
  setValue,
}) {
  return (
    <div key={index} className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-700">Product #{index + 1}</h4>
        <button
          type="button"
          className="text-sm text-red-500 hover:underline"
          onClick={() => helpers.remove(index)}
        >
          Remove
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">Name</label>
          <input
            {...register(`productsByCategory.${cat}.${index}.name`)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-green-200"
            placeholder="Classic Leather Shoulder Bag"
          />
          <p className="text-xs text-red-500 mt-1">
            {errors?.productsByCategory?.[cat]?.[index]?.name?.message}
          </p>
        </div>

        <div>
          <label className="text-sm text-gray-500">Description</label>
          <textarea
            {...register(`productsByCategory.${cat}.${index}.description`)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm resize-y min-h-[84px]"
            placeholder="A timeless everyday bag crafted from 100% genuine leather..."
          />
          <p className="text-xs text-red-500 mt-1">
            {errors?.productsByCategory?.[cat]?.[index]?.description?.message}
          </p>
        </div>

        <div>
          <label className="text-sm text-gray-500">Size</label>
          <select
            {...register(`productsByCategory.${cat}.${index}.size`)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">Count</label>
          <input
            type="number"
            {...register(`productsByCategory.${cat}.${index}.count`, {
              valueAsNumber: true,
            })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
          <p className="text-xs text-red-500 mt-1">
            {errors?.productsByCategory?.[cat]?.[index]?.count?.message}
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="mt-4">
        <label className="text-sm text-gray-500 block mb-2">Upload Photo</label>
        <div className="border rounded-md p-3 bg-gray-50">
          {uploadState.status === "success" ? (
            <div className="flex items-center gap-3">
              <img
                src={uploadState.url}
                alt="preview"
                className="w-12 h-12 rounded border object-cover"
              />
              <div className="flex-1">
                <div className="text-sm">{uploadState.name}</div>
                <div className="w-full bg-slate-200 rounded h-2 mt-2 overflow-hidden">
                  <div
                    className="h-2 rounded bg-green-600"
                    style={{ width: `${uploadState.progress}%` }}
                  />
                </div>
              </div>
              <button
                type="button"
                className="text-sm text-gray-600 underline"
                onClick={() => {
                  setValue(`productsByCategory.${cat}.${index}.fileUrl`, undefined);
                  setValue(`productsByCategory.${cat}.${index}.fileName`, undefined);
                  setUploadState(cat, index, { status: "idle", progress: 0 });
                }}
              >
                Remove
              </button>
            </div>
          ) : uploadState.status === "uploading" ? (
            <div>
              <div className="text-xs text-gray-500 mb-2">{uploadState.name}</div>
              <div className="w-full bg-slate-200 rounded h-3 overflow-hidden">
                <div
                  className="h-3 rounded bg-green-600"
                  style={{ width: `${uploadState.progress}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {uploadState.progress}% uploading...
              </div>
            </div>
          ) : uploadState.status === "failed" ? (
            <div className="text-center text-sm text-red-600">
              <div>Retry — Upload Failed</div>
              <div className="text-xs text-gray-500 mt-1">jpg, jpeg, or png (max 5MB)</div>
              <input
                type="file"
                accept="image/*"
                className="mt-2 text-xs"
                onChange={(e) => handleFileSelect(cat, index, e.target.files?.[0])}
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">No file uploaded</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(cat, index, e.target.files?.[0])}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
