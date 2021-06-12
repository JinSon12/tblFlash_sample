import React from "react";
import "./search.css";

const SearchBar = (props) => {
  return (
    <div class="input-group flex-nowrap input-group-container">
      <span class="input-group-text" id="addon-wrapping">
        @
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Search for restaurants, cuisines or dishes"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
};

export default SearchBar;
