import React, { Component } from "react";
import { Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import indexRoutes from "../routes";
import Header from "../components/Header";

class LayoutApp extends Component {
  state = {};

  render() {
    const props = this.props;
    return (
      <div>
        <BrowserRouter basename={"reactdemodeploy"}>
        <Header {...props} />
        <Switch>
          {indexRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path}  to={prop.pathTo} key={key} />;
            return (
              <Route path={prop.path} exact ={prop.exact} component={prop.component} key={key} />
            );
          })}
        </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default LayoutApp;
