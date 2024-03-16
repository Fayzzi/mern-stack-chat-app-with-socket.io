import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import Store from "./redux/Store.js";
import { Provider } from "react-redux";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>

  /* </React.StrictMode> */
);
