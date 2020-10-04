import React from "react";

const ContactListItem = ({ contact, onDelete }) => {
  const { name, number } = contact;
  return (
    <>
      <span className="contactInfo">
        {name}: {number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default ContactListItem;
