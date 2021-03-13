import React from "react";
import { ReactComponent as Chakra } from "../svgs/chakra.svg";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavItem>
        <div className="title-container">
          <span className="title">Kithulgoda Aranya</span>
          <Chakra className="logo" />
        </div>
      </NavItem>
      <NavItem text="About" to="/about" />
      <NavItem text="Gallery" to="/gallery" />
      <NavItem text="Events" to="/events" />
      <NavItem text="Contact Us" to="/contacts" />
    </nav>
  );
};

export default NavBar;
