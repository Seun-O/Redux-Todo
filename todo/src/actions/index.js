//Action Type
export const ADD_TODO = "ADD_TODO";
export const MARK_DONE = "MARK_DONE";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

// Action Creator to add a Todo Item
let counter = 0;
export const addTodo = todo => {
  const newTodo = {
    id: counter++,
    task: todo,
    completed: false
  };
  return {
    //Action
    type: ADD_TODO,
    todo: newTodo
  };
};

export const markDone = id => {
  return {
    type: MARK_DONE,
    id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const clearComplete = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
