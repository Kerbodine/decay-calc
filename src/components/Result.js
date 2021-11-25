import React from "react";

export default function Result({ value, time }) {
  return (
    <div className="absolute top-4 w-80 rounded-xl border-gray-200 border-2 shadow-md p-4">
      <p className="text-gray-700">
        <span className="font-bold">=</span> {Math.round(value * 100) / 100}{" "}
        {time}
      </p>
    </div>
  );
}
