import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AddContacts from "../AddContacts";
import ContactsList from "../contactsList";
import FilterPanel from "../Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  setStateToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
    window.removeEventListener("deforeunload", this.setStateToLocalStorage);
  }


  onItemAdded = (name, number) => {
      const isAlreadyHas = this.state.contacts.some((item) => {
          return item.name === name;
      })
    if (isAlreadyHas) {
        alert(`${name} is already in contacts`)
        return;
    }

    this.setState((state) => {
      const contact = this.createContact(name, number);
      return { contacts: [...state.contacts, contact] };
    });
  };

  createContact(name, number) {
    return {
      id: uuidv4(),
      name,
      number,
    };
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems(contacts, filter) {
    if (filter.length === 0) {
      return contacts;
    }
    return contacts.filter((item) =>{
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  };

  onDelete = (id) => {
    this.setState((state) => {
        // const idx = state.contacts.findIndex((item) => item.id === id);
        const contacts = state.contacts.filter((item) => {
            return item.id !== id;
        });
        return {contacts};
    });
};

  componentDidMount() {
    window.addEventListener("beforeunload", this.setStateToLocalStorage);
    this.setState(JSON.parse(localStorage.getItem("state")));
  }

  componentWillUnmount(){
    this.setStateToLocalStorage();
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleItems = this.filterItems(contacts, filter);
    return (
      <>
        <div className="addFrom">
          <h2>Phonebook</h2>
          <AddContacts onItemAdded={this.onItemAdded} />
        </div>
        <div className="contactList">
          <FilterPanel onFilterChange={this.onFilterChange} />
          <ContactsList items={visibleItems} 
          onDelete = {this.onDelete}
          />
        </div>
      </>
    );
  }
}
