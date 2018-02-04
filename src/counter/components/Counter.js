import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const { data, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return (
      <p>
        Clicked: {data.value} times <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrementAsync}>incrementAsync</button>
      </p>
    );
  }
}

export default Counter;
