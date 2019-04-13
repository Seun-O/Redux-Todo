import React, { Component } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Todo List</h1>
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
