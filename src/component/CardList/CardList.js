import React, { useState, useEffect } from "react";
import Card from "./../Card/Card";
import { data } from "../../data/data";

const CardList = (props) => {
  const [viewCount, setviewCount] = useState(0);

  useEffect(() => {
    setviewCount(data.viewCnt);
    console.log(viewCount);
  }, []);

  let mappedData = data.map((data, ind) => {
    return <Card data={data} />;
  });

  return <div className="card-list">{mappedData}</div>;
};

export default CardList;
