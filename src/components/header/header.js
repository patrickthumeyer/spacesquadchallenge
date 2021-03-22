import React from "react";
import "./header.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "german", label: "Germany" },
  { value: "DACH", label: "DACH" },
  { value: "global", label: "Global" },
  { value: "american", label: "USA" },
];
const defaultOption = options[0];

const Header = ({ headline, setCountry }) => {
  return (
    <div className="header">
      <h1 className="header__text">{headline}</h1>
      <Dropdown
        options={options}
        value={defaultOption}
        onChange={({ value }) => setCountry(value)}
      />
    </div>
  );
};

export default Header;
