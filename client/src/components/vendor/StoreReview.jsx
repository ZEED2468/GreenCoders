import React from "react";
import VendorNavbar from "./VendorNavbar";

const StoreReview = () => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <VendorNavbar />

      {/* Main Section */}
      <main className="flex flex-col items-center text-center px-6 py-12">
        <img
          src="/images(vendor)/store-review.svg"
          alt="Under Review Illustration"
          className="w-56 h-auto mb-6"
        />

        <h2 className="text-2xl font-semibold mb-2">Under Review!</h2>
        <p className="text-gray-500 mb-6">
          Store is under review. <br />
          Check back in the next 24 hours.
        </p>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow transition-all">
          Continue
        </button>
      </main>
    </div>
  );
};

export default StoreReview;
