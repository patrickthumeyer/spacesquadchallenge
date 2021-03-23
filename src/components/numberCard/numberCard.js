import React from "react";
import "./numberCard.scss";
import CountUp from "react-countup";

const NumberCard = ({ amount, headline }) => {
  return (
    <div className="numberCard">
      <h4 className="numberCard__title">{headline}</h4>
      <CountUp
        className="numberCard__amount"
        start={0}
        end={amount}
        duration={1.5}
        separator=","
      />
    </div>
  );
};

export default NumberCard;
