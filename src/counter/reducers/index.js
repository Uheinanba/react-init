export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'FETCH_SUCCEEDED':
      console.log(action);
    default:
      return state;
  }
};
