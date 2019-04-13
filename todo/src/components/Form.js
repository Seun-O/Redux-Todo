import React, { Component } from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

class Form extends Component {
  state = { todoItem: "" };
  H_change = e => {
    this.setState({ todoItem: e.target.value });
  };
  H_submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoItem);
    this.setState({ todoItem: "" });
  };
  render() {
    return (
      <form onSubmit={this.H_submit}>
        <input
          onChange={this.H_change}
          type="text"
          placeholder="Add todo ..."
          value={this.state.todoItem}
        />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapPropsToState = state => {
  return { todoItem: state.todoItem };
};

export default connect(
  mapPropsToState,
  { addTodo }
)(Form);
