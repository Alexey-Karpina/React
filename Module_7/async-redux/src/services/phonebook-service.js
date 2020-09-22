import { Component } from "react";

export default class PhonebookService extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    const low = require("lowdb");
    const FileSync = require("lowdb/adapters/FileSync");
    const adapter = new FileSync("../db.json");
    const db = low(adapter);
    this.setState({data: db.getState()});
  }

  getContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resolve) {
          resolve(this.state.data);
        } else {
          reject(new Error("Error !!!"));
        }
      }, 700);
    });
  }
}
