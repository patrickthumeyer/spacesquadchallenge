import React from "react";
import "./header.scss";

const Header = ({ headline }) => {
  return (
    <div className="header">
      <h1 className="header__text">{headline}</h1>
    </div>
  );
};

export default Header;
