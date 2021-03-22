import React from "react";
import "./header.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Germany", "DACH", "Global", "USA"];
const defaultOption = options[0];

const Header = ({ headline }) => {
  return (
    <div className="header">
      <h1 className="header__text">{headline}</h1>
      <Dropdown options={options} value={defaultOption} />
    </div>
  );
};

export default Header;
