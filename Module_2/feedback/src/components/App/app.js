import React, { Component } from "react";

import FeedBack from "../FeedbackOpions";
import Statistics from '../Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = (name) => {
    if (name === "good") {
      this.setState((state) => {
        return { good: state.good + 1 };
      });
      return;
    }
    if (name === "neutral") {
      this.setState((state) => {
        return { neutral: state.neutral + 1 };
      });
      return;
    }
    this.setState((state) => {
      return { bad: state.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    const positivePercentageCount = Math.trunc((good / totalCount) * 100);

    return (
      <div className="feedBack">
        <h2 className="feedBack__title">Please leave feedback</h2>
        <div className="feedBack__buttons">
          <FeedBack onLeaveFeedBack={this.onLeaveFeedBack} />
        </div>
        <div className="feedBack__statistic">
          {totalCount === 0 ? (
            <p>No FeedBack given</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercantage={positivePercentageCount}
            />
          )}
        </div>
      </div>
    );
  }
}
