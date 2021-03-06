import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/GlobalFont.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
