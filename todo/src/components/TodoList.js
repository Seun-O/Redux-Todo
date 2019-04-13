import React from "react";
import Todo from "./TodoItem";
import { connect } from "react-redux";

const TodoList = props => {
  console.log(props);
  return (
    <ul>
      {props.todos.map((todo, i) => {
        return <Todo key={i} task={todo.task} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
