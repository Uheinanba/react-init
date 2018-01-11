import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state, ownProps) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onDecrement: () => {
    dispatch(decrement());
  },
  actions: bindActionCreators(CounterActions, dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // console.log(stateProps, dispatchProps, ownProps);
  return Object.assign({}, ownProps, {
    value: stateProps.value,
    onIncrement: () => dispatchProps.increment(),
    onDecrement: () => dispatchProps.decrement(),
  });
};
// const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
const CounterContainer = connect(mapStateToProps, CounterActions, mergeProps)(
  Counter,
);

export default CounterContainer;
