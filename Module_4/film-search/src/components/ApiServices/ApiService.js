import axios from 'axios';

const KEY = "06c2bcf71f1b1095eeda0fac7fba7762";
const _apiBase = "https://api.themoviedb.org/3/";

export default class ApiService {
    async getTrending(){
        const url = `${_apiBase}trending/movie/week?api_key=${KEY}`
        return await axios.get(url).then((response) => response.data);
    }

    async searchMovies(query){
        const url = `${_apiBase}search/movie?api_key=${KEY}&query=${query}`;
        return await axios.get(url).then((response) => response.data);
    }

    async getMovieDetails(id){
        const url = `${_apiBase}movie/${id}?api_key=${KEY}`;
        return await axios.get(url).then((response) => response);
    }

    async getMovieCredits(id){
        const url = `${_apiBase}movie/${id}/credits?api_key=${KEY}`;
        return await axios.get(url).then((response) => response.data);
    }

    async getMovieReviews(id){
        const url = `${_apiBase}movie/${id}/reviews?api_key=${KEY}`;
        return await axios.get(url).then((response) => response.data)
    }
}