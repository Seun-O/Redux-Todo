import React from "react";

export default props => {
  return (
    <li>
      <input type="checkbox" name={props.task} id="" />
      <label htmlFor="">{props.task}</label>
    </li>
  );
};
