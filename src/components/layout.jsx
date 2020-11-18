import React, { Component } from "react";

import Navbar from "./navbar";
import Quote from "./quote";
import Footer from "./footer";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Quote />
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
