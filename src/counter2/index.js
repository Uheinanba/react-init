import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './counter2/containers/Counter';
import reducer from './counter2/reducers';
import logger from 'redux-logger';
import logger1 from './counter2/middleware/logger1';

const store = createStore(reducer, applyMiddleware(logger1));
const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
