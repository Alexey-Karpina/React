import React, { Component } from "react";


export default class AddFrom extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: null,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState({ name: "", number: "" });
    const newItem = this.props.onItemAdded || (() => {});
    newItem(name, number);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onInputChange}
            placeholder="Enter your name"
          />
          <label>Phone Number</label>
          <input
            name="number"
            type="text"
            className="form-control"
            value={this.state.number}
            onChange={this.onInputChange}
            placeholder="888-88-88"
          />

          <button className="btn btn-secondary" type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}
