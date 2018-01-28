import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import Counter from './containers/Counter';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Counter />
  </div>
);

export default App;
