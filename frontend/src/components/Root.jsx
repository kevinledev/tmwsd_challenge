// src/components/root.js
import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// We'll create this soon
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
