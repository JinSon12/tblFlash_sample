import React from "react";
import SearchBar from "../Search/SearchBar";
import CardList from "../CardList/CardList";
import "./rest-deals.css";

const RestaurantDeals = () => {
  return (
    <div className="restaurant-deals">
      <SearchBar />
      <CardList />
    </div>
  );
};

export default RestaurantDeals;
