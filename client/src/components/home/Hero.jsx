import React from "react";
import { emitter } from "../../lib/vendor/emitter"; // adjust path
import { Link } from "react-router-dom";

export function Hero() {
  const handleBecomeVendor = () => {
    emitter.emit("vendorModeChange", true);
  };

  return (
    <section className="bg-gradient-to-br from-green-100 via-green-50 to-green-25 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Shop Sustainable
              <br />
              <span className="text-green-600">Live Better</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Discover eco-friendly products that help you live sustainably
              while protecting the planet.
            </p>

            <div className="flex gap-4">
              <Link to="/explore">
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">
                  Shop Now
                </button>
              </Link>
              <Link to="/vendor/create-store" onClick={handleBecomeVendor}>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 hover:bg-green-600 hover:text-white transition-all rounded-md">
                  Become a Vendor
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/shoe-header.svg"
              alt="Eco-friendly shoes"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
