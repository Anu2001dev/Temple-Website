import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar";
import "./components/navbar.css";
import TopBar from "./components/topbar";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Navbar />, document.querySelector("nav"));
ReactDOM.render(<TopBar />, document.querySelector("main"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
