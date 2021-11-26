import React from "react";

export default function ResultItem({ title, formula, value }) {
  return (
    <div>
      <h3 className="label">{title}</h3>
      {formula}
      <p>= {value}</p>
      <hr />
    </div>
  );
}
