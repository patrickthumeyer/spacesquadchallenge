import React from "react";
import "./numberCard.scss";

const NumberCard = ({ amount, headline }) => {
  return (
    <div className="numberCard">
      <h4 className="numberCard__title">{headline}</h4>
      <span className="numberCard__amount">{amount.toLocaleString()}</span>
    </div>
  );
};

export default NumberCard;
