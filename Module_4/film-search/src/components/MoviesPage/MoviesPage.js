import React, { Component } from "react";

export default class MoviesPage extends Component {
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
      <>
        <header>
          <form className="SearchForm" onSubmit={this.onSubmit}>
            <button type="submit" className="SearchFrom__button">
              <span className="SearchFrom__button-label">Find</span>
            </button>

            <input
              className="SearchForm__input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Enter keywords..."
              onChange={this.onInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}
