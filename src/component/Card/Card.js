import React, { useState, useEffect } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { randomNumGenerator } from "../../utils/randomNumGenerator";

const Card = (props) => {
  const [viewCount, setviewCount] = useState(randomNumGenerator(10, 3000));

  let cardData = props.data;

  const handleClick = () => {
    // I would further send a request to the server increasing the count, using axios.
    setviewCount(viewCount + 1);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-top">
        <img className="card-img" src={`img/${cardData.img}`} alt="" />
        <div className="viewCount">
          <FontAwesomeIcon className="icon" icon={faEye} />
          {viewCount}
        </div>
        <div className="store-name">{cardData.storeName}</div>
      </div>
      <div className="card-text">
        <div className="title">{cardData.title}</div>
        <div className="subtitle">{cardData.subtitle}</div>
        <div className="location">{cardData.location}</div>
      </div>
      <div className="card-btn">View Deal</div>
    </div>
  );
};

export default Card;
