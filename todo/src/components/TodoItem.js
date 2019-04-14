import React from "react";
import { markDone, deleteTodo } from "../actions";
import { connect } from "react-redux";

const TodoItem = props => {
  return (
    <div>
      <ul>
        <li
          onClick={() => props.markDone(props.id)}
          style={{ textDecoration: props.completed ? `line-through` : `none` }}
        >
          {props.task}
        </li>
      </ul>
      <button onClick={() => props.deleteTodo(props.id)}>X</button>
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
