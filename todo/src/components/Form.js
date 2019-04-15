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
          placeholder="Add a task ..."
          value={this.state.todoItem}
          required
        />
        <button
          className="purple left btn waves-effect waves-light"
          type="submit"
          name="submit"
        >
          Submit
          <i className="material-icons right">send</i>
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
