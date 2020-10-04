import React from "react";
import { connect } from "react-redux";
import { contactAddedToList } from "../actions";

const AddContact = ({ dispatch }) => {
  let name;
  let number;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.value.trim() || !number.value.trim()) {
      return;
    }
    dispatch(contactAddedToList(name.value, number.value));
    name.value = "";
    number.value = "";
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="form-group">
        <label>Name</label>
        <input
          ref={(node) => (name = node)}
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />
        <label>Phone Number</label>
        <input
          ref={(node) => (number = node)}
          name="number"
          type="text"
          className="form-control"
          placeholder="888-88-88"
        />

        <button className="btn btn-secondary" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default connect()(AddContact);
