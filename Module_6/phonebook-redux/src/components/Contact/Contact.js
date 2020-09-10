import React from "react";
import PropTypes from "prop-types";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className="list-group-item">
      {name}: {number}
      <button
        type="button"
        onClick={onDelete}
        className="btn btn-outline-danger btn-sm"
      >
        &times;
      </button>
    </li>
  );
};

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
