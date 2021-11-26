import React from "react";
import { ReactComponent as HalfLifeFormula } from "./svgs/half-life-formula.svg";
import { ReactComponent as TimeFormula } from "./svgs/time-formula.svg";
import { ReactComponent as InitialFormula } from "./svgs/initial-formula.svg";
import { ReactComponent as CurrentFormula } from "./svgs/current-formula.svg";
import ResultItem from "./ResultItem";

export default function Result({ value, halfLifeUnit, timeUnit }) {
  return (
    <div className="w-80 md:w-96 rounded-xl border-gray-200 border-2 shadow-md p-8">
      <h1 className="title mb-2">Results:</h1>
      <p className="text-gray-700">
        <div className="flex flex-col gap-4">
          {console.log(value)}
          {value.halfLife ? (
            <ResultItem
              title="Half-life:"
              formula={<HalfLifeFormula />}
              value={value.halfLife + ` ${halfLifeUnit}`}
            />
          ) : null}
          {value.time ? (
            <ResultItem
              title="Time elapsed:"
              formula={<TimeFormula />}
              value={value.time + ` ${timeUnit}`}
            />
          ) : null}
          {value.initAmount ? (
            <ResultItem
              title="Initial amount/Bq:"
              formula={<InitialFormula />}
              value={value.initAmount}
            />
          ) : null}
          {value.currentAmount ? (
            <ResultItem
              title="Current amount/Bq:"
              formula={<CurrentFormula />}
              value={value.currentAmount}
            />
          ) : null}
        </div>
      </p>
    </div>
  );
}
