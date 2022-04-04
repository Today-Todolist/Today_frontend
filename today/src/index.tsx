import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/GlobalFont.css";
import Modal from "react-modal";
import { RecoilRoot } from "recoil";

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
