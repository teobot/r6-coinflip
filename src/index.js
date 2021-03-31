import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./css/index.css";

import App from "./screens/App";

const DisplayContainer = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DisplayContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
