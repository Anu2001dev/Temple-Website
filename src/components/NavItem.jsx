import React, { Component } from "react";
import PropTypes from "prop-types";

class NavItem extends Component {
  contentortext() {
    const { text, children } = this.props;
    return text ? <span className="nav-text">{text}</span> : children;
  }

  render() {
    return (
      <li className="nav-item">
        <a href="/" className="nav-link">
          {this.contentOrText()}
        </a>
      </li>
    );
  }
}

NavItem.defaultProps = {
  text: "",
  children: null,
};

NavItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
};

export default NavItem;
