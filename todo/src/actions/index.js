//Action Type
export const ADD_TODO = "ADD_TODO";

// Action Creator to add a Todo Item
export const addTodo = todo => {
  const newTodo = {
    task: todo,
    completed: false
  };
  return {
    //Action
    type: ADD_TODO,
    payload: newTodo
  };
};
