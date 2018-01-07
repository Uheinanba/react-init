import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./counter2/containers/Counter";
import reducer from "./counter2/reducers";

const store = createStore(reducer);
const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
