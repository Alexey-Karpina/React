import React, { Component } from "react";

export default class FilterPanel extends Component {
  state = {
    temp: "",
  };

  onTempChange = (e) => {
    const { onFilterChange = () => {} } = this.props;
    this.setState({ temp: e.target.value });

    onFilterChange(e.target.value);
  };

  render() {
    return (
      <>
        <h5>Find contacts by name</h5>
        <input
          type="text"
          className="filterInput"
          placeholder="Type for search"
          value={this.state.temp}
          onChange={this.onTempChange}
        />
      </>
    );
  }
}
