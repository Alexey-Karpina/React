import React from "react";

const feedBackButtons = [
  { name: "good", label: "Good" },
  { name: "neutral", label: "Neutral" },
  { name: "bad", label: "Bad" },
];

const FeedBack = ({ onLeaveFeedBack = () => {} }) => {
  const buttons = feedBackButtons.map(({ name, label }) => {
    const classNames = "btn btn-primary";

    return (
      <button
        key={name}
        type="button"
        onClick={() => onLeaveFeedBack(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });
  return(
      <>
        {buttons}
      </>
  );
};

export default FeedBack;
