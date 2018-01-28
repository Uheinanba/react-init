import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  counter,
  visibilityFilter,
});

export default todoApp;
