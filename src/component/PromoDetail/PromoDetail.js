import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./promo-detail.css";

const PromoDetail = (props) => {
  const urlParams = useParams();
  let promoId = urlParams.promoId;
  let data = props.location.state.data;
  let viewCount = props.location.state.viewCount;

  console.log(props.location.state.data);
  console.log(data.img);

  return (
    <>
      <div className="promo-det-container">
        <div className="card-img-container">
          <img className="card-img" src={`../../img/${data.img}`} alt="" />
        </div>

        <span className="promo-minor-info">
          <div className="location">{data.location}</div>

          <div className="promo-viewCount">
            <FontAwesomeIcon className="icon" icon={faEye} />
            <span className="text">{viewCount}</span>
          </div>
        </span>

        <div className="promo-info">
          <div className="promo-type">{data.promotionType}</div>
          <div className="store-name">{data.storeName}</div>
          <div className="divider"></div>

          <div className="title">{data.title}</div>
          <div className="subtitle">{data.subtitle}</div>
          <div className="det-descr">{data.detailedDescr}</div>
        </div>

        <div className="promo-store-add-info">
          <div>
            Address:
            <a href={`http://maps.google.com/?q=${data.addr}`}> {data.addr}</a>
          </div>

          <div>
            Phone: <a href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
        </div>
        <div className="card-btn">Order Now</div>
      </div>
    </>
  );
};

export default PromoDetail;
