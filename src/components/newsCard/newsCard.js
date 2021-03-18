import React from "react";
import "./newsCard.scss";
import coronaImage from "../../assets/images/corona-virus.jpg";

const NewsCard = () => {
  return (
    <div className="newsCard">
      <img className="newsCard__image" src={coronaImage} alt="covid" />
      <div className="newsCard__info">
        <h1 className="newsCard__info__headline">Breaking Corona News</h1>
        <p className="newsCard__info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span className="newsCard__info__date">Published: 99.99.2099</span>
      </div>
    </div>
  );
};

export default NewsCard;
