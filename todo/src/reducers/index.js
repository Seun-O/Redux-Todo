import { ADD_TODO } from "../actions/index";

const initState = {
  todos: [
    { task: "Clean Room", completed: false },
    { task: "Finish Project", completed: false },
    { task: "Update Blog", completed: false },
    { task: "Start Todo List", completed: true },
    { task: "Finish Todo List", completed: false }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
