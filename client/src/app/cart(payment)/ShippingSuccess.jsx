import React from "react";
import { useNavigate } from "react-router-dom"; // if using React Router

export default function ShippingSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-semibold mt-10 mb-6 ml-10">My Cart</h1>
      <div className="flex flex-col items-center justify-center bg-white px-6">
        {/* Header */}

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-10 text-gray-900">
            Shipping Successful
          </h2>

          {/* Image */}
          <img
            // src="/shipping-product.svg"
            src="/trolley.svg"
            alt="Shipping Success"
            className="w-52 h-52 mb-6 object-contain"
          />

          {/* Message */}
          <p className="text-gray-600 mb-8 max-w-md">
            Your order has been sent out. Expect delivery within <br />
            <span className="font-medium text-gray-800">
              7 to 14 working days.
            </span>
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mb-16 rounded-md font-medium transition-all duration-200"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </>
  );
}
