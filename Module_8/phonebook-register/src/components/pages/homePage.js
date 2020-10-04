import React from "react";
import ContactList from "../contactList/contactList";
import AddContact from "../../containers/AddContact";
import Searcher from "../../containers/Searcher";

const HomePage = () => {
  return (
    <>
      <AddContact />
      <Searcher />
      <ContactList />
    </>
  );
};

export default HomePage;
