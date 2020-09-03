import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class Searcher extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
    };
  }

  onTempChange = (e) => {
    const { onSearcherChange = () => {} } = this.props;
    this.setState({ temp: e.target.value });

    onSearcherChange(e.target.value);
  };

  render() {
    const { isVisible } = this.props;
    return (
        <TransitionGroup>
          <CSSTransition in={isVisible} classNames={"searcher"} timeout={500}>
            <div>
              <h3>Find contacts by name</h3>
              <input
                type="text"
                placeholder="Type for search"
                value={this.state.temp}
                onChange={this.onTempChange}
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
    );
  }
}
