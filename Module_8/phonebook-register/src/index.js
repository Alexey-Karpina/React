import React from "react";
import { render } from "react-dom";
import App from "./components/app/app";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
