import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Header } from "./components/Components";

ReactDOM.render(
  <React.StrictMode>
    <Header header="CV Creator" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
