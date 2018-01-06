let nextTodoId = 0;
export const addTodo = text => ({
  text,
  type: "ADD_TODO",
  id: nextTodoId++
});

export const setVisibilityFilter = filter => ({
  filter,
  type: "SET_VISIBILITY_FILTER"
});

export const toggleTodo = id => ({
  id,
  type: "TOGGLE_TODO"
});
