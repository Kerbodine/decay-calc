import React, { useState } from "react";
import Result from "./Result";

export default function Calculator() {
  const [halfLife, setHalfLife] = useState("");
  const [halfLifeUnit, setHalfLifeUnit] = useState("years");
  const [time, setTime] = useState("");
  const [timeUnit, setTimeUnit] = useState("years");
  const [initAmount, setInitAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(null);

  const updateHalfLife = (e) => {
    setHalfLife(e.target.value);
  };

  const updatePercentage = (e) => {
    setPercentage(e.target.value);
  };

  const updateTime = (e) => {
    setTime(e.target.value);
  };

  const updateInitAmount = (e) => {
    setInitAmount(e.target.value);
  };

  const updateCurrentAmount = (e) => {
    setCurrentAmount(e.target.value);
  };

  const updateHalfLifeUnit = (e) => {
    setHalfLifeUnit(e.target.value);
  };

  const updateTimeUnit = (e) => {
    setTimeUnit(e.target.value);
  };

  // Table to convert time into seconds
  const unitConversion = {
    years: 31_556_952,
    days: 86_400,
    hours: 3_600,
    seconds: 1,
  };

  // Decay formulae
  const calcTime = () => {
    let calcPercentage;
    if (percentage === "") {
      calcPercentage = parseInt(currentAmount) / parseInt(initAmount);
    } else {
      calcPercentage = parseInt(percentage) / 100;
    }
    return (
      Math.round(
        ((parseInt(halfLife * unitConversion[halfLifeUnit]) *
          (Math.log10(calcPercentage) / Math.log10(0.5))) /
          unitConversion[timeUnit]) *
          100
      ) / 100
    );
  };

  const calcHalfLife = () => {
    let calcPercentage;
    if (percentage === "") {
      calcPercentage = parseInt(currentAmount) / parseInt(initAmount);
    } else {
      calcPercentage = parseInt(percentage) / 100;
    }
    return (
      Math.round(
        (parseInt(time * unitConversion[timeUnit]) /
          (Math.log10(calcPercentage) / Math.log10(0.5)) /
          unitConversion[halfLifeUnit]) *
          100
      ) / 100
    );
  };

  const calcCurrentAmount = () => {
    return parseInt(
      initAmount *
        Math.pow(
          0.5,
          parseInt(time * unitConversion[timeUnit]) /
            parseInt(halfLife * unitConversion[halfLifeUnit])
        )
    );
  };

  const calcInitAmount = () => {
    return (
      currentAmount /
      Math.pow(
        0.5,
        parseInt(time * unitConversion[timeUnit]) /
          parseInt(halfLife * unitConversion[halfLifeUnit])
      )
    );
  };

  // Results function
  const calculateFunction = () => {
    let result = {
      time: null,
      halfLife: null,
      initAmount: null,
      currentAmount: null,
    };
    if (time === "") {
      result.time = calcTime();
    }
    if (halfLife === "") {
      result.halfLife = calcHalfLife();
    }
    if (currentAmount === "") {
      result.currentAmount = calcCurrentAmount();
    }
    if (initAmount === "") {
      result.initAmount = calcInitAmount();
    }
    setResult(result);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-80 border-gray-200 border-2 rounded-xl p-8 shadow-md">
        <h1 className="title">Half-life Calculator</h1>
        <h2 className="text-md text-gray-500 mb-2">Created by Michael Tong</h2>
        <hr />
        <div className="my-2">
          <h3 className="label">Half-life:</h3>
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
          <h3 className="label">Time elapsed:</h3>
          <div className="flex gap-2">
            <input
              className="border-gray-200 border-2 outline-none rounded-md px-2 w-16 pr-6 focus:border-gray-700"
              onChange={updateTime}
              value={time}
            ></input>
            <select
              name="cars"
              id="cars"
              className="outline-none border-gray-200 border-2 rounded-md focus:border-gray-700 text-gray-700"
              onChange={updateTimeUnit}
              value={timeUnit}
            >
              <option value="years">Years</option>
              <option value="days">Days</option>
              <option value="hours">Hours</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>
        </div>
        <div className="my-2">
          <h3 className="label">Initial amount/Bq:</h3>
          <input
            className="border-gray-200 border-2 outline-none rounded-md px-2 w-32 pr-6 focus:border-gray-700"
            onChange={updateInitAmount}
            value={initAmount}
          ></input>
        </div>
        <div className="my-2">
          <h3 className="label">Current amount/Bq:</h3>
          <input
            className="border-gray-200 border-2 outline-none rounded-md px-2 w-32 pr-6 focus:border-gray-700"
            onChange={updateCurrentAmount}
            value={currentAmount}
          ></input>
        </div>
        <div className="my-2">
          <h3 className="label">% remaining:</h3>
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
          onClick={calculateFunction}
        >
          Calculate
        </button>
      </div>
      <Result
        value={result ? result : ""}
        halfLifeUnit={halfLifeUnit}
        timeUnit={timeUnit}
      />
    </div>
  );
}
