import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Quote from "./Quote";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route path="/" component={Quote} exact />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
