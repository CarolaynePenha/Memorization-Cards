import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import "./css/styles.css";
import App from "./components/App";

const container = document.querySelector(".root");
const divRoot = ReactDOM.createRoot(container);
divRoot.render(<App />);
