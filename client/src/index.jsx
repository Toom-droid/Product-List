import React from "react";
import ReactDOM from "react-dom/client";
import "./css/globals.css";
import App from "./App";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
