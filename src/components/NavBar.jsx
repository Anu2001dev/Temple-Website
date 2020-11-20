import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as Chakra } from "../svgs/chakra.svg";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavItem>
        <div className="title-container">
          <span className="title">Kithulgoda Aranya</span>
          <Chakra className="logo" />
        </div>
      </NavItem>
      <NavItem text="Gallery" />
      <NavItem text="News" />
      <NavItem text="Contacts" />
    </nav>
  );
};

export default NavBar;
