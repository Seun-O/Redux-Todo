import React from "react";
import { markDone, deleteTodo } from "../actions";
import { connect } from "react-redux";

const TodoItem = props => {
  return (
    <div className="card-panel">
      <div className="row">
        <div className="col s10">
          <ul>
            <li
              onClick={() => props.markDone(props.id)}
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
