import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit = () => {} } = this.props;
    onFormSubmit(this.state.value);
    e.target.reset();
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
