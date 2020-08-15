"use strict";
export default class ApiServices {
  constructor() {
    this._apiBase =
      "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
    this.key = "17692964-f8d106e9264a402f5a3ea4398";
    this.page = 1;
    this.perPage = 12;
  }
  state = {
    items: [],
  };
  getResource(query) {
    return fetch(
      `${this._apiBase}&q=${query}&page=${this.page}&key=${this.key}&per_page=${this.perPage}`
    )
      .then((response) => response.json())
      .then((data.hits));

    // const res = await fetch(
    //   `${this._apiBase}&q=${query}&page=${this.page}&key=${this.key}&per_page=${this.perPage}`
    // );

    // if (!res.ok) {
    //   throw new Error(`Could not fetch ${query}, received ${res.status}`);
    // }

    // return axios.get(`${this._apiBase}&q=${query}&page=${this.page}&key=${this.key}&per_page=${this.perPage}`)
    // .then(response => this.setState({ items: response.data.hits }));

    // return fetch(`${this._apiBase}&q=${query}&page=${this.page}&key=${this.key}&per_page=${this.perPage}`).then(response => response.json().then(data => data.hits));
  }
}
