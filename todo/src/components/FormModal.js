import React from "react";
import Form from "./Form";

import { Modal, Button } from "react-materialize";
import { connect } from "react-redux";
import { clearComplete } from "../actions";

const FormModal = props => {
  return (
    <>
      <Modal id="modal1">
        <Form />
      </Modal>

      <Button
        floating
        fab={{ direction: "right" }}
        icon="edit"
        className="purple"
        large
        style={{ position: "relative", top: "1rem" }}
      >
        <Button
          onClick={() => props.clearComplete()}
          floating
          icon="done_all"
          className="green lighten-1"
        />
        <Button
          href="#modal1"
          floating
          className="blue modal-trigger"
          waves="light"
          icon="add"
        />
      </Button>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { clearComplete }
)(FormModal);
