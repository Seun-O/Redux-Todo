import React, { Component } from "react";
import FormModal from "./FormModal";
import TodoList from "./TodoList";
import Menu from "../layout/Menu";
import Header from "../layout/Header";
import Container from "../layout/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Header />
          <TodoList />
          <FormModal />
        </Container>
      </div>
    );
  }
}

export default App;
