import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';

/* const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}; */

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
  // (state.todos, state.visibilityFilter),
});

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      todos: getVisibleTodos(state),
    };
  };
};

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
};

const VisibleTodoList = connect(makeMapStateToProps, mapDispatchToProps)(
  TodoList,
);

export default VisibleTodoList;
