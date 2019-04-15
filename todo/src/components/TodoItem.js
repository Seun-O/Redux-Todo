import React from "react";
import { markDone, deleteTodo } from "../actions";
import { connect } from "react-redux";
import "./Todo.css";

const TodoItem = props => {
  return (
    <div
      className="row todo-item"
      style={
        props.completed ? { background: "rgba(187, 222, 251, 0.1)" } : null
      }
    >
      <div
        className="col s10 todo"
        onClick={() => props.markDone(props.id)}
        style={props.completed ? { color: `gray` } : null}
      >
        <i className="material-icons">
          {props.completed ? `done_all` : `ac_unit`}
        </i>
        <ul>
          <li
            style={{
              textDecoration: props.completed ? `line-through` : `none`
            }}
          >
            {props.task}
          </li>
        </ul>
      </div>
      <div className="col 2" onClick={() => props.deleteTodo(props.id)}>
        <i className="material-icons">delete</i>
      </div>
    </div>
  );
};

const markStateToProps = state => {
  return state;
};

export default connect(
  markStateToProps,
  { markDone, deleteTodo }
)(TodoItem);
