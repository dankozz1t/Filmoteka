import axios from 'axios';

export default class ApiService {
  static API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';
  static BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.searchQuery = 'popular';
    this.films = null;
  }

  async fetchFilms() {
    try {
      const url = `${ApiService.BASE_URL}/movie/${this.searchQuery}?api_key=${ApiService.API_KEY}`;
      const data = await axios.get(url);
      this.films =  data.data.results;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async fetchImagesByName(query) {
    try {
      const url = `${ApiService.BASE_URL}/search/movie/?api_key=${ApiService.API_KEY}&query=${query}`;
      const data = await axios.get(url);
      this.films =  data.data.results;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}




