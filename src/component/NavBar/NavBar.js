import React from "react";
import "./navbar.css";

const NavBar = (props) => {
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

export default NavBar;
