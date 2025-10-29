import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productDetailsSchema } from "../../lib/vendor/validation";

export default function PersonalDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productDetailsSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-16">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm p-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Personal Details
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Fill in the following details
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Country
            </label>
            <select
              {...register("country")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            >
              <option value="">Select country</option>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Region
            </label>
            <select
              {...register("region")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            >
              <option value="">Select region</option>
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
            </select>
            {errors.region && (
              <p className="text-red-500 text-xs mt-1">
                {errors.region.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              State
            </label>
            <select
              {...register("state")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            >
              <option value="">Select state</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Kano</option>
              <option>Rivers</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">
                {errors.state.message}
              </p>
            )}
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
