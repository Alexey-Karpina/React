import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ErrorBoundry from "../errorBoundry/errorBoundry";
import PhonebookService from "../../services/phonebook-service";
import { PhonebookServiceProvider } from "../phonebookServiceContext/phonebookServiceContext";
import { HomePage, LoginPage, RegisterPage, UserMenu } from "../pages";
import Header from "../header";
import { getProfileFetch } from "../../actions";



const phonebookService = new PhonebookService();

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
  };

  render() {
    return (
        <ErrorBoundry>
          <PhonebookServiceProvider value={phonebookService}>
            <Router>
              <Header />
              <Switch>
                <Route path="/" component={HomePage} exact />

                <Route path="/login" component={LoginPage} />

                <Route path="/register" component={RegisterPage} />

                <Route path="/user" component={UserMenu} />
              </Switch>
            </Router>
          </PhonebookServiceProvider>
        </ErrorBoundry>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
});

export default connect(null, mapDispatchToProps)(App);
