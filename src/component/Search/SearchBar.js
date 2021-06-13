import React, { useContext } from "react";
import { SearchContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useContext(SearchContext);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar">
      <div className="input-group flex-nowrap input-group-container">
        <span className="input-group-text" id="addon-wrapping">
          <FontAwesomeIcon icon={faSearch} style={{ color: "#ffc765" }} />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for restaurants, cuisines or dishes"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          value={searchTerm}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;
