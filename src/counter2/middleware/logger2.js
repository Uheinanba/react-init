const logger1 = store => next => action => {
  console.log('[logger2]: dispatching', action);
  let result = next(action);
  console.log('[logger2]:next state = ', store.getState());
  return result;
};

export default logger1;
