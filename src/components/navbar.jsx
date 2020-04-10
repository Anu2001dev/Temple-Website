import React, { Component } from "react";
import { ReactComponent as Arrow } from "../svgs/arrow.svg";
import { ReactComponent as News } from "../svgs/news.svg";
import { ReactComponent as Home } from "../svgs/home.svg";
import { ReactComponent as Gallery } from "../svgs/gallery.svg";
import { ReactComponent as Contact } from "../svgs/contact.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="arrow-container">
          <span id="menu-title">KITHULGODARANYA</span>
          <Arrow className="svg arrow" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="../../public/index.html">
              <Home className="svg nav-svg" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../public/index.html">
              <Gallery className="svg nav-svg" />
              <span className="nav-text">Gallery</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../public/index.html">
              <News className="svg nav-svg" />
              <span className="nav-text">News and Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../public/index.html">
              <Contact className="svg nav-svg" />
              <span className="nav-text">Contact Us</span>
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
