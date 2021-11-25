import React, { useState } from "react";
import Result from "./Result";
var Latex = require("react-latex");

export default function Calculator() {
  const [halfLife, setHalfLife] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [result, setResult] = useState(null);
  const [halfLifeUnit, setHalfLifeUnit] = useState("years");

  const updateHalfLife = (e) => {
    setHalfLife(e.target.value);
  };

  const updatePercentage = (e) => {
    setPercentage(e.target.value);
  };

  const updateHalfLifeUnit = (e) => {
    setHalfLifeUnit(e.target.value);
  };

  const calculateYears = () => {
    setResult(
      parseInt(halfLife) *
        (Math.log10(parseInt(percentage) / 100) / Math.log10(0.5))
    );
  };

  let formula = `t=t_{1/2}\times\frac{log(\%)}{log(\frac{1}{2})}`;

  return (
    <div>
      <div className="w-80 border-gray-200 border-2 rounded-xl p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-gray-700">
          Half-life Calculator
        </h1>
        <h2 className="text-md text-gray-500 mb-2">Created by Michael Tong</h2>
        <h3 className="text-gray-700 text-sm font-semibold">Formula:</h3>
        <img src="/formula.png" className="w-36 mb-4" />
        <div className="my-2">
          <h3 className="text-gray-700 text-sm font-semibold">
            Enter sample half-life:
          </h3>
          <div className="flex gap-2">
            <input
              className="border-gray-200 border-2 outline-none rounded-md px-2 w-16 focus:border-gray-700"
              onChange={updateHalfLife}
              value={halfLife}
            ></input>
            <select
              name="cars"
              id="cars"
              className="outline-none border-gray-200 border-2 rounded-md focus:border-gray-700 text-gray-700"
              onChange={updateHalfLifeUnit}
              value={halfLifeUnit}
            >
              <option value="years">Years</option>
              <option value="days">Days</option>
              <option value="hours">Hours</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>
        </div>
        <div className="my-2">
          <h3 className="text-gray-700 text-sm font-semibold">
            Enter % remaining:
          </h3>
          <div className="flex items-center">
            <input
              className="border-gray-200 border-2 outline-none rounded-md px-2 w-16 pr-6 focus:border-gray-700"
              onChange={updatePercentage}
              value={percentage}
            ></input>
            <p className="-ml-6 font-bold text-gray-700">%</p>
          </div>
        </div>
        <button
          className="mt-4 w-20 h-8 rounded-md border-2 text-gray-500 border-gray-200 hover:border-gray-700 hover:bg-gray-700 hover:text-white flex items-center justify-center"
          onClick={calculateYears}
        >
          Calculate
        </button>
      </div>
      <div className="relative">
        {result !== null ? <Result value={result} time={halfLifeUnit} /> : null}
      </div>
    </div>
  );
}
