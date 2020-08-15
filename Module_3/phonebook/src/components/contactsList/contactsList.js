import React from "react";

import ContactsItem from "../contactsItem";

const ContactsList = ({ items, onDelete }) => {
  const elements = items.map((item) => {
    const {id, ...itemProps } = item;
    return (
      <>
        <ContactsItem {...itemProps} 
        onDelete = { ()=> onDelete(id)}/>
      </>
    );
  });
  return <ul className="contactsList">{elements}</ul>;
};

export default ContactsList;
