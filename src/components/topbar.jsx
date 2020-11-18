import React, { Component } from "react";
import { ReactComponent as Chakra } from "../svgs/chakra.svg";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div className="menu-container">
        <a href="../../public/index.html">
          <Chakra className="svg chakra" />
        </a>
      </div>
    );
  }
}

export default TopBar;
