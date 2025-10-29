import React, { useState, useEffect } from "react";
import { emitter } from "../../lib/vendor/emitter";
import { useNavigate } from "react-router-dom";

const VendorProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = React.useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Dropdown Trigger */}
      <img
        src="/images(vendor)/account-change.svg"
        alt="Account"
        className="w-5 h-5 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50">
          <button
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setOpen(false);
              // navigate("/vendor/profile") if needed
            }}
          >
            Profile
          </button>

          <button
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setOpen(false);
              navigate("/");
              emitter.emit("vendorModeChange", false); // switch back to customer
            }}
          >
            Switch to Customer
          </button>

          <button
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            onClick={() => {
              setOpen(false);
              // perform logout logic
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default VendorProfile;
