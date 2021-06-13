import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle none className="dropdown" color="link">
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffc765" }} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Option 1</DropdownItem>

            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarBrand href="/" className="navbar-brand">
          Restaurant Deals
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;
