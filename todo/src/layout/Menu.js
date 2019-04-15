import React from "react";
import "./Menu.css";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo center">Redux Todo List</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down" />
      </div>
    </nav>
  );
};
