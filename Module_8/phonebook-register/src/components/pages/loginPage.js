import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoginFetch } from "../../actions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.PreventDefault();
    this.props.userLoginFetch(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

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
          placeholde="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginFetch: (userInfo) => dispatch(userLoginFetch(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
