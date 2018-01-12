const logger1 = store => next => action => {
  console.log('[logger1]: dispatching', action);
  let result = next(action);
  console.log('[logger1]:next state = ', store.getState());
  return result;
};

export default logger1;
