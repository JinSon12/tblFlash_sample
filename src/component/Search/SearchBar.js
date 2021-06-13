import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <div class="input-group flex-nowrap input-group-container">
        <span class="input-group-text" id="addon-wrapping">
          <FontAwesomeIcon icon={faSearch} style={{ color: "#ffc765" }} />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search for restaurants, cuisines or dishes"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
};

export default SearchBar;
