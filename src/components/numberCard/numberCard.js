import React from "react";
import "./numberCard.scss";

const NumberCard = ({ amount, headline }) => {
  return (
    <div className="numberCard">
      <h4>{headline}</h4>
      <span>{amount}</span>
    </div>
  );
};

export default NumberCard;
