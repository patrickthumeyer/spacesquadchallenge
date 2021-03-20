import React from "react";
// import variables from "../../styles/variables.scss";
import "./progressCard.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 34.2;

// const BLUE300 = {
//   backgroundColor: variables.blue300,
// };

const ProgressCard = () => {
  return (
    <div className="progressCard">
      <CircularProgressbar
        className="progressCard__circle"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          trailColor: "rgb(28, 28, 112)",
          pathColor: "#430000",
          textColor: "rgb(0, 0, 70)",
        })}
      />
      <h3 className="progressCard__text">
        of the german population is vaccinated
      </h3>
    </div>
  );
};

export default ProgressCard;
