import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductStoreSchema } from "../../../lib/vendor/validation";
import CategorySelector from "./CategorySelector";
import ProductForm from "./ProductForm";
// import VendorNavbar from "../VendorNavbar";

/* ---------------------- Fake Upload (Simulated Progress) ---------------------- */
function fakeUpload(file, onProgress) {
  return new Promise((resolve, reject) => {
    const total = 800 + Math.random() * 1200;
    let uploaded = 0;
    const interval = 60 + Math.random() * 120;
    const id = setInterval(() => {
      uploaded += interval;
      const percent = Math.min(100, Math.round((uploaded / total) * 100));
      onProgress(percent);
      if (percent >= 100) {
        clearInterval(id);
        if (Math.random() < 0.12) reject(new Error("Upload failed"));
        else {
          const fakeUrl = URL.createObjectURL(file);
          resolve({ url: fakeUrl, name: file.name });
        }
      }
    }, 120);
  });
}

/* ---------------------- Main Component ---------------------- */
export default function CreateStoreForm() {
  const defaultCategories = ["Bags", "Smart Phones", "Shoes", "Clothing"];

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ProductStoreSchema),
    defaultValues: {
      categories: ["Bags"],
      productsByCategory: { Bags: [] },
    },
  });

  const selectedCategories = watch("categories");

  const fieldArrayHelpers = {};
  for (const cat of defaultCategories) {
    fieldArrayHelpers[cat] = useFieldArray({
      control,
      name: `productsByCategory.${cat}`,
    });
  }

  const [uploads, setUploads] = useState({});
  const setUploadState = (cat, idx, next) =>
    setUploads((s) => ({
      ...s,
      [cat]: {
        ...(s[cat] || {}),
        [idx]: { ...(s[cat]?.[idx] || {}), ...next },
      },
    }));

  useEffect(() => {
    for (const cat of selectedCategories) {
      const path = `productsByCategory.${cat}`;
      if (!watch(path)) {
        setValue(path, [
          { name: "", description: "", size: "Medium", count: 1 },
        ]);
      }
    }
  }, [selectedCategories, setValue, watch]);

  async function handleFileSelect(cat, idx, file) {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024)
      return setUploadState(cat, idx, { status: "failed", name: file.name });

    setUploadState(cat, idx, {
      status: "uploading",
      progress: 0,
      name: file.name,
    });
    try {
      const result = await fakeUpload(file, (p) =>
        setUploadState(cat, idx, {
          progress: p,
          status: "uploading",
          name: file.name,
        })
      );
      setValue(`productsByCategory.${cat}.${idx}.fileUrl`, result.url);
      setValue(`productsByCategory.${cat}.${idx}.fileName`, result.name);
      setUploadState(cat, idx, { status: "success", progress: 100, ...result });
    } catch {
      setUploadState(cat, idx, {
        status: "failed",
        progress: 0,
        name: file.name,
      });
    }
  }

  const onSubmit = async (data) => {
    console.log("✅ Submitted payload:", data);
    alert("Form submitted successfully! Check console for payload.");
  };

  return (
    <>
      {/* <VendorNavbar /> */}
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Create Store
        </h1>
        <p className="text-gray-500 mb-8">
          Kindly fill out the basic details of your store below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CategorySelector
            control={control}
            errors={errors}
            defaultCategories={defaultCategories}
          />

          {selectedCategories?.map((cat) => {
            const helpers = fieldArrayHelpers[cat];
            const items = (watch("productsByCategory") || {})[cat] || [];
            return (
              <div key={cat} className="mb-6 border rounded-lg bg-white">
                <div className="px-6 py-4 border-b">
                  <h3 className="font-semibold text-gray-700">{cat}</h3>
                </div>
                <div className="p-6">
                  {items.map((item, idx) => (
                    <ProductForm
                      key={idx}
                      cat={cat}
                      index={idx}
                      register={register}
                      errors={errors}
                      item={item}
                      helpers={helpers}
                      uploadState={uploads[cat]?.[idx] || {}}
                      handleFileSelect={handleFileSelect}
                      setUploadState={setUploadState}
                      setValue={setValue}
                    />
                  ))}

                  <button
                    type="button"
                    onClick={() =>
                      helpers.append({
                        name: "",
                        description: "",
                        size: "Medium",
                        count: 1,
                      })
                    }
                    className="inline-flex items-center gap-2 text-green-600 text-sm mt-3"
                  >
                    <span className="text-2xl leading-none">+</span> Add More
                    Products
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 rounded border text-sm"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 rounded bg-green-600 text-white text-sm shadow"
            >
              {isSubmitting ? "Submitting..." : "Create Store"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
