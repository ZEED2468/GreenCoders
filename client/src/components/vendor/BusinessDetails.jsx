import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessDetailsSchema } from "../../lib/vendor/validation";

export default function BusinessDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(businessDetailsSchema),
  });

  const onSubmit = (data) => {
    console.log("Business details submitted:", data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-16">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm p-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Business Details
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Fill in the following details
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Business Name"
              {...register("businessName")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.businessName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Business Registration Number"
              {...register("registrationNumber")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.registrationNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.registrationNumber.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="url"
              placeholder="Business Website"
              {...register("website")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.website && (
              <p className="text-red-500 text-xs mt-1">
                {errors.website.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Business Email Address"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              Social Media Links
            </p>
            <input
              type="url"
              placeholder="Instagram Link"
              {...register("instagram")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            <input
              type="url"
              placeholder="Tiktok Link"
              {...register("tiktok")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            <input
              type="url"
              placeholder="Whatsapp Link"
              {...register("whatsapp")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md mt-4 font-medium transition"
          >
            Continue
          </button>
        </form>
      </div>

      <div className="mt-6 flex items-center gap-2 text-gray-800 font-medium">
        <img src="/favicon.png" alt="GreenCoders" className="w-6 h-6" />
        GreenCoders
      </div>
    </div>
  );
}
