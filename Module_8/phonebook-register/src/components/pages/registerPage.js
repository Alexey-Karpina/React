import React, { Component } from "react";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>
        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo)),
});

export default connect(null, mapDispatchToProps)(Signup);
