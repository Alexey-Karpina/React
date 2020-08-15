import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p className="statistics__name">Good: {good}</p>
      <p className="statistics__name">Neutral: {neutral}</p>
      <p className="statistics__name">Bad: {bad}</p>
      <p className="statistics__name">Total: {total}</p>
      <p className="statistics__name">
        Positive feedback: {positivePercantage}%
      </p>
    </>
  );
};

export default Statistics;