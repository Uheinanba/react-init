import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./counter/components/Counter";
import counter from "./counter/reducers";

import "./index.css";

const store = createStore(counter);
const rootEl = document.getElementById("root");

/* console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
unsubscribe();
store.dispatch({ type: "INCREMENT" }); */

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootEl
  );

render();
store.subscribe(render);
