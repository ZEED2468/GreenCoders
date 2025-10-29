import React from "react";

const VendorNavbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-sm border-b border-[#cdced7]">
      <div className="flex items-center gap-2">
        <img
          src="/favicon.png"
          alt="GreenMart Logo"
          className="w-6 h-6 object-contain"
        />
        <h1 className="font-semibold text-lg text-green-700">GreenMart</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 p-3 overflow-hidden">
          <img
            src="/images(vendor)/Bell.svg"
            alt="Notifications"
            className="w-full h-full text-gray-500 cursor-pointer"
          />
          <span className="bg-[#E98E23] text-white rounded-full relative p-[2px] bottom-[35px] left-[12px] text-[7px]">
            02
          </span>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#DFE4FF] p-1.5 overflow-hidden">
          <img
            src="/images(vendor)/user-profile-pic.svg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <img
          src="/images(vendor)/account-change.svg"
          alt="change account"
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default VendorNavbar;
