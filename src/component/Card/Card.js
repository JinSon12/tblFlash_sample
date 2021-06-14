import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { randomNumGenerator } from "../../utils/randomNumGenerator";
import "./card.css";

// const DISCOUNT = "Discount";
// const FREEDEL = "Free Delivery";

const Card = (props) => {
  const [viewCount, setviewCount] = useState(randomNumGenerator(10, 3000));
  const [promoType, setPromoType] = useState("");
  const [redirectTo, setRedirectTo] = useState(undefined);

  let cardData = props.data;
  console.log(cardData);

  const handleClick = () => {
    // I would further send a request to the server increasing the count, using axios.
    setviewCount(viewCount + 1);
    setRedirectTo(props.dataId);
  };

  // check promotion type and sets the promoType state.
  const getPromotionType = () => {
    let ptype = cardData.promotionType;

    setPromoType(ptype);
  };

  // if there is location information associated with the deal, display it along with icon.
  const displayLocation = () => {
    let loc = cardData.location;
  };

  useEffect(() => {
    getPromotionType();
  }, []);

  if (redirectTo) {
    console.log(cardData);
    return (
      <Redirect
        push
        to={{
          pathname: `/promo/${redirectTo}`,
          state: { data: cardData, viewCount: viewCount },
        }}
      />
    );
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-top">
        <img className="card-img" src={`img/${cardData.img}`} alt="" />
        <div className="viewCount">
          <FontAwesomeIcon className="icon" icon={faEye} />
          {viewCount}
        </div>
        <div className="promo-type">{promoType}</div>
      </div>
      <div className="card-text">
        <div className="store-name">{cardData.storeName}</div>
        <div className="title">{cardData.title}</div>
        <div className="subtitle">{cardData.subtitle}</div>
        <div className="location">{cardData.location}</div>
      </div>
      <div className="card-btn">View Deal</div>
    </div>
  );
};

export default Card;
