import React from "react";

export default function Review() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-16">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm p-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <img src="/completed-img.svg" alt="completed tick" />
        </div>

        <h2 className="text-lg font-semibold text-gray-900">
          Your request is under review
        </h2>
        <p className="text-sm text-gray-600 mt-2 mb-6">
          You will get an email notification when you have been accepted
        </p>

        <button
          type="button"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-medium transition"
        >
          Continue
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-gray-800 font-medium">
        <img src="/favicon.png" alt="GreenCoders" className="w-6 h-6" />
        GreenCoders
      </div>
    </div>
  );
}
