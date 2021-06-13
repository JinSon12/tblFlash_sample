import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../App";
import Card from "./../Card/Card";
import { data } from "../../data/data";

const CardList = (props) => {
  const [searchTerm] = useContext(SearchContext);
  const [searchResult, setSearchResult] = useState(data);

  useEffect(() => {
    if (searchTerm !== "") {
      renderSearchResult();
    } else {
      // sets the default searchResult as the data
      setSearchResult(data);
    }
  }, [searchTerm]);

  const renderSearchResult = () => {
    let searchResult = data.filter((singleData) => {
      const nameIndex = singleData.storeName
        ? singleData.storeName.toLowerCase().indexOf(searchTerm.toLowerCase())
        : "";
      return nameIndex > -1;
    });

    setSearchResult(searchResult);
  };

  let mappedData = searchResult.map((data, ind) => {
    return <Card data={data} key={ind} dataId={ind + 1} />;
  });

  return <div className="card-list">{mappedData}</div>;
};

export default CardList;
