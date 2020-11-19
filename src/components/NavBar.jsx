import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as Chakra } from "../svgs/chakra.svg";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavItem>
          <div className="title-container">
            <span className="title">Kithulgoda Aranya</span>
            <Chakra className="logo" />
          </div>
        </NavItem>
        <NavItem text="Home" />
        <NavItem text="Gallery" />
        <NavItem text="News" />
        <NavItem text="Contacts" />
      </ul>
    </nav>
  );
};

export default NavBar;
