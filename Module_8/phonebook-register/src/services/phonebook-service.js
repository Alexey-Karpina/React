import { Component } from "react";
import axios from "axios";

export default class PhonebookService extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://goit-phonebook-api.herokuapp.com/contacts")
      .then((data) => console.log(data));
  }
  componentWillUnmount() {
    axios.post(
      "https://goit-phonebook-api.herokuapp.com/contacts",
      this.state.data
    );
  }
  getContacts() {
    return axios.get("https://goit-phonebook-api.herokuapp.com/contacts");
  }
  setContacts(data) {
    this.setState({ data });
  }
}
