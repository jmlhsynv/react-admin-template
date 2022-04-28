import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/sb-admin-2.css";
import "./assets/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
