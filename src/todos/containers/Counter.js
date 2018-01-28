import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter, increment } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment()),
});

const Counter = props => {
  return (
    <div onClick={props.increment}>
      <button>+</button>
      {props.value}
    </div>
  );
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default FilterLink;
