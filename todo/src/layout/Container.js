import React from "react";

export default props => {
  return (
    <div className="container">
      <div className="container">
        <div
          style={{ borderRadius: "5px" }}
          className="card blue lighten-5 z-depth-2"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
