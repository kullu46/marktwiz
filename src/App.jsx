import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import routeOptions from "./routes/route";
import "./index.scss";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

class App extends Component {
  render() {
    let routes = routeOptions.routes.map(({ path, component, exact }, i) => (
      <Route
        key={Math.random() + "ROUTE_"}
        exact={exact}
        path={path}
        component={component}
      />
    ));

    return (
      <div className="app-container App">
        <Header />
        <Switch>
          {routes}
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object
};
export default App;
