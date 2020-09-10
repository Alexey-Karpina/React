import React from "react";
import { connect } from "react-redux";
import { addContact } from "../../actions";
import { v4 as uuidv4 } from "uuid";

const AddContacts = ({ dispatch }) => {
  let name;
  let number;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.value.trim() || !number.value.trim()) {
          return;
        }
        let id = uuidv4();
        dispatch(addContact(name.value, number.value, id));
        name.value = "";
        number.value = "";
      }}
    >
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

export default connect()(AddContacts);
