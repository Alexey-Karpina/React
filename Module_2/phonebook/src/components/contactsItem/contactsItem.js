import React from "react";

const ContactsItem = ({ name, id, number, onDelete }) => {
  const classNames = "contactsListItem";
  return (
    <li key={id} className={classNames}>
      {name}: {number}

      <button type="button"
      className="btn btn-outline-danger btn-sm"
      onClick={onDelete}
      >Delete</button>
    </li>

  );
};

export default ContactsItem;
