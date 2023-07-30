import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { cartReducer } from "./Redux/cartReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const allReducers = combineReducers({ cart: cartReducer });
const store = createStore(allReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
