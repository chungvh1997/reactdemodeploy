import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./layout/LandingPage";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <LandingPage />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
