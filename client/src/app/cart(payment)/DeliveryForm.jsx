import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deliverySchema } from "../../lib/auth/validations";

export default function DeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(deliverySchema),
  });

  const onSubmit = (data) => {
    console.log("Delivery Info:", data);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-20">
      <h2 className="text-center text-lg font-semibold mb-6">
        Delivery Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("fullName")}
            placeholder="Greencoders"
            className="w-full border rounded px-3 py-2"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email")}
            placeholder="greencoders23@gmail.com"
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <input
            {...register("address")}
            placeholder="Enter your Address"
            className="w-full border rounded px-3 py-2"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center gap-2">
            <select
              className="border rounded px-2 py-2 bg-gray-50"
              defaultValue="+234"
              disabled
            >
              <option value="+234">🇳🇬 +234</option>
            </select>
            <input
              {...register("phone")}
              placeholder="555-555-1217"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Region
          </label>
          <select
            {...register("region")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">State</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Kano">Kano</option>
          </select>
          {errors.region && (
            <p className="text-red-500 text-sm">{errors.region.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
            {...register("city")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select City</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Lekki">Lekki</option>
            <option value="Gwarimpa">Gwarimpa</option>
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
