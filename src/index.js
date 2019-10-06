import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import appReducers from "./reducers/index.reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import LayoutApp from "./layout/LayoutApp";

require("moment/locale/vi");
var $ = require("jquery");
global.jQuery = require("jquery");
window.$ = $;
const hist = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <LayoutApp history={hist} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
