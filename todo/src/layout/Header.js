import React, { Component } from "react";
import "./Header.css";
export default class extends Component {
  state = { date: new Date() };

  render() {
    const options = {
      //   weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    const day = {
      weekday: "long"
    };
    return (
      <div className="container center">
        <div className="date-container">
          <h1>{this.state.date.toLocaleDateString("en-US", day)}</h1>
          <p>{this.state.date.toLocaleDateString("en-US", options)}</p>
        </div>
      </div>
    );
  }
}
