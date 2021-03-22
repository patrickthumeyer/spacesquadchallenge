import React from "react";
import "./numberCard.scss";
import CountUp from "react-countup";

const NumberCard = ({ amount, headline }) => {
  // const formattedAmount = Number(amount.toLocaleString());
  const formattedAmount = amount
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return (
    <div className="numberCard">
      <h4 className="numberCard__title">{headline}</h4>
      <CountUp
        className="numberCard__amount"
        start={0}
        end={amount}
        duration={2}
        separator=","
      />
    </div>
  );
};

export default NumberCard;
