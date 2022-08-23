import axios from 'axios';

export default class ApiService {
  static API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';
  static BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.searchQuery = 'popular';
    this.films = null;
    this.page = 1;
    this.totalPages = null;
  }

  async fetchFilms() {
    try {
      const url = `${ApiService.BASE_URL}/movie/${this.searchQuery}?api_key=${ApiService.API_KEY}`;
      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async fetchImagesByName() {
    try {
      const url = `${ApiService.BASE_URL}/search/movie/?api_key=${ApiService.API_KEY}&query=${this.searchQuery}`;
      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      console.log(this.totalPages);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async fetchImagesByPage() {
    try {
      const url = `${ApiService.BASE_URL}/search/movie/?api_key=${ApiService.API_KEY}&query=${this.searchQuery}&page=${this.page}`;
      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      console.log(this.totalPages);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
