import React from "react";
import "./header.scss";
import CoronaSVG from "../../assets/svgs/corona";

const Header = ({ headline }) => {
  return (
    <div className="header">
      <h1 className="header__text">{headline}</h1>
      <div className={"header__image"}>
        <CoronaSVG />
      </div>
    </div>
  );
};

export default Header;
