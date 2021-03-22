import React from "react";
import "./progressCard.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 34.2;

const ProgressCard = ({ country }) => {
  return (
    <div className="progressCard">
      <CircularProgressbar
        className="progressCard__circle"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          trailColor: "rgb(28, 28, 112)",
          pathColor: "#430000",
          textColor: "rgb(0, 0, 70)",
        })}
      />
      <h3 className="progressCard__text">
        {`of the ${country} population is vaccinated`}
      </h3>
    </div>
  );
};

export default ProgressCard;
