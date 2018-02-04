import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchIncrementAsync } from './counter/saga';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';
// import { loadState, saveState } from './counter/storage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  counter,
  // loadState(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchIncrementAsync);

const rootEl = document.getElementById('root');

/* store.subscribe(() => {
  saveState(store.getState());
}); */

const render = () =>
  ReactDOM.render(
    <Counter
      data={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      onIncrementAsync={() => store.dispatch({ type: 'INCREMENT_ASYNC' })}
    />,
    rootEl,
  );

render();
store.subscribe(render);
