import React from "react";
import "./card.css";

const Card = (props) => {
  let data = props.data;
  console.log(data);

  let mappedData = data.map((ele, ind) => {
    return (
      <div className="card" key={ind}>
        <div className="viewCount">{ele.viewCnt}</div>
        <div className="store-name">{ele.storeName}</div>
        <div className="title">{ele.title}</div>
        <div className="subtitle">{ele.subtitle}</div>
      </div>
    );
  });

  return <div className="card-list">{mappedData}</div>;
};

export default Card;
