import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ text, children, to }) => {
  const content = text ? <span className="nav-text">{text}</span> : children;

  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {content}
      </Link>
    </li>
  );
};

NavItem.defaultProps = {
  text: "",
  children: null,
  to: "/",
};

NavItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.element,
};

export default NavItem;
