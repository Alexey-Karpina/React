import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact";

const ContactsList = ({ items = [], onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Contact key={item.id} {...item} onDelete={() => onDelete(item.id)} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
