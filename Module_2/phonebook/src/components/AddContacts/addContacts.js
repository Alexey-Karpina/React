import React, { Component } from "react";

export default class AddContacts extends Component {
  state = {
    name: "",
    number: "",
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  onSubmit = (e) =>{
    e.preventDefault();
    const {name, number} = this.state;
    this.setState({name: '', number: ''});
    const newItem = this.props.onItemAdded || (() => {});
    newItem(name, number);
  };

  render() {
    return (
      <form className="addPanel" onSubmit={this.onSubmit}>
        <h4>Name</h4>
        <input
          type="text"
          className="contactName"
          value={this.state.name}
          onChange={this.onNameChange}
          placeholder="Enter your name"
        />
        <input type="tel"
        className="contactNumber"
        value={this.state.number}
        onChange={this.onNumberChange}
        placeholder="888-88-88"
        />

        <button type="submit" className="btn btn-outline-secondary">
          Add contact
        </button>
      </form>
    );
  }
}
