import React from "react";
import Todo from "./TodoItem";
import { clearComplete } from "../actions";
import { connect } from "react-redux";

const TodoList = props => {
  if (props.todos.length === 0) {
    return <h1>You don't have any items</h1>;
  } else {
    return (
      <div>
        {props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
            />
          );
        })}
        <div>
          <button onClick={() => props.clearComplete()}>ClearComplete</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { clearComplete }
)(TodoList);
