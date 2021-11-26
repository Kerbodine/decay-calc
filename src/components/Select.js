import React from "react";

export default function Select({ active, setActive }) {
  return (
    <div className="w-full h-10 rounded-md p-1 border-2 border-gray-200 flex gap-1">
      <button
        className={`multiselect ${
          active === "half-life" ? "!bg-gray-700 !text-white" : ""
        }`}
      >
        Half-life
      </button>
      <button className="multiselect">Time elapsed</button>
      <button className="multiselect">Initial quantity</button>
      <button className="multiselect">Quantity remaining</button>
    </div>
  );
}
