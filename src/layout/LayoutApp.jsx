import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import indexRoutes from "../routes";
import Header from "../components/Header";

class LayoutApp extends Component {
  state = {};

  render() {
    const props = this.props;
    return (
      <div>
        <Header {...props} />
        <Switch>
          {indexRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default LayoutApp;
