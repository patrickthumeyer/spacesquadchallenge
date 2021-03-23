import React from "react";
import "./NewsHeader.scss";

const NewsHeader = ({ headline }) => {
  return (
    <div className="newsHeader">
      <h1 className="newsHeader__text">{headline}</h1>
    </div>
  );
};

export default NewsHeader;
