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
        value={percentage}
        text={`${percentage}%`}
        // styles={buildStyles({
        //   trailColor: "#d6d6d6",
        // })}
      />
      <h1 className="progressCard__text">
        of the german population is vaccinated
      </h1>
    </div>
  );
};

export default ProgressCard;
