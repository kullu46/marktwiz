import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";

hydrate(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
