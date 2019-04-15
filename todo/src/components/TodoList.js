import React from "react";
import Todo from "./TodoItem";
import { clearComplete } from "../actions";
import { connect } from "react-redux";
import "./TodoList.css";

const TodoList = props => {
  if (props.todos.length === 0) {
    return (
      <div className="center">
        <h1 className="task-complete">
          Tasks complete{" "}
          <i style={{ fontSize: "4rem" }} className="material-icons">
            done_all
          </i>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="">
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
        </div>
        <div className="center-align">
          <button
            className="waves-effect waves-light btn"
            onClick={() => props.clearComplete()}
          >
            ClearComplete
          </button>
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
