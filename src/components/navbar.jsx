import React, { Component } from "react";

import { ReactComponent as Chakra } from "../svgs/chakra.svg";

class Navitem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a href="/" className="nav-link">
          {this.contentOrText()}
        </a>
      </li>
    );
  }
  contentOrText() {
    const { text, children } = this.props;
    return text ? <span className="nav-text">{text}</span> : children;
  }
}

class Navbar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <Navitem>
          <div className="title-container">
            <span className="title">Kithulgoda Aranya</span>
            <Chakra />
          </div>
        </Navitem>
        <Navitem text="Home" />
        <Navitem text="Gallery" />
        <Navitem text="News" />
        <Navitem text="Contacts" />
      </ul>
    );
  }
}

export default Navbar;
