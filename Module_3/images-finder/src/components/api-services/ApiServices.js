import axios from "axios";


const key = "17934583-0967630f5fcdeeb8767dc35ec";
const _apiBase =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const perPage = 12;

export default class ApiServices {
  constructor() {
    this.page = 1;
  }

  async getResource(query) {
    if (query) {
      console.log(query);
      const url = `${_apiBase}&q=${query}&key=${key}&page=${this.page}&per_page=${perPage}`;
      console.log(url);
      return await axios.get(url).then((response) => response.data);
    }
    return null;
  }
}
