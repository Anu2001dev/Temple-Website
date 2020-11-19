import React from "react";

import NavBar from "./NavBar";
import Quote from "./Quote";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Quote />
        <Footer />
      </main>
    </>
  );
};

export default App;
