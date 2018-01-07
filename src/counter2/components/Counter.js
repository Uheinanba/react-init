import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <p>
        Clicked: {value} times <br />
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
