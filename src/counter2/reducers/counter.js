const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(3434);
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counter;
