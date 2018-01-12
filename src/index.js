import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

/* console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
unsubscribe();
store.dispatch({ type: "INCREMENT" }); */

const dispatchAndLog = (store, action) => {
  console.log('dispatching', action);
  store.dispatch(action);
  console.log('next state', store.getState());
};

const increment = store => {
  const action = { type: 'INCREMENT' };
  console.log('dispatching', action);
  store.dispatch(action);
  console.log('next state', store.getState());
};

const logger = store => {
  let next = store.dispatch;
  return action => {
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());

    return result;
  };
};

const applyMiddlewareByMonkeypatching = (store, middlewares) => {
  middlewares = middlewares.slice();
  middlewares.reverse();

  middlewares.forEach(middleware => {
    store.dispatch = middleware(store);
  });
};

applyMiddlewareByMonkeypatching(store, [logger]);

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => increment(store)}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl,
  );

render();
store.subscribe(render);
