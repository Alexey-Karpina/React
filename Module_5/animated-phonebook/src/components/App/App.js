import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../header";
import AddForm from "../addForm";
import Searcher from "../searcher";
import ItemList from "../itemList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      search: "",
      isVisible: false,
    };
  }

  setStateToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
    window.removeEventListener("beforeunload", this.setStateToLocalStorage);
  };

  onItemAdded = (name, number) => {
    const isAlreadyHas = this.state.contacts.some((item) => {
      return item.name === name;
    });
    if (isAlreadyHas) {
      alert(`${name} is already exist`);
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

  onSearcherChange = (search) => {
    this.setState({ search });
  };

  searchedItems(contacts, search) {
    if (search.length === 0) {
      return contacts;
    }
    return contacts.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onDelete = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((item) => {
        return item.id !== id;
      });
      return { contacts };
    });
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.setStateToLocalStorage);
    this.setState(JSON.parse(localStorage.getItem("state")));
  }

  componentDidUpdate() {
    if (this.state.contacts.length > 1 && !this.state.isVisible) {
      this.setState({ isVisible: true });
    }
    if (this.state.contacts.length < 2 && this.state.isVisible) {
      this.setState({ isVisible: false });
    }
  }

  componentWillUnmount() {
    this.setStateToLocalStorage();
  }

  render() {
    const { contacts, search, isVisible } = this.state;
    const visibleItems = this.searchedItems(contacts, search);
    return (
      <>
        <Header/>

        <hr />

        <AddForm onItemAdded={this.onItemAdded} />

        {isVisible && (
          <Searcher
            onSearcherChange={this.onSearcherChange}
            isVisible={this.state.isVisible}
          />
        )}

        <ItemList items={visibleItems} onDelete={this.onDelete} />
      </>
    );
  }
}
