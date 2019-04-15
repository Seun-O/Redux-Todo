import React, { Component } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Menu from "../layout/Menu";
import Header from "../layout/Header";
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <Header />
          <Form />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
