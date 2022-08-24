import axios from 'axios';

export default class ApiService {
  static API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';
  static BASE_URL = 'http://api.themoviedb.org/3';

  constructor() {
    this.searchCategory = 'popular';
    this.searchName = '';
    this.films = null;
    this.page = 1;
    this.totalPages = null;
  }

  async fetchFilms() {
    try {
      const url = `${ApiService.BASE_URL}/movie/${this.searchCategory}?api_key=${ApiService.API_KEY}`;
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
      const url = `${ApiService.BASE_URL}/search/movie/?api_key=${ApiService.API_KEY}&query=${this.searchName}`;
      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async fetchImagesByPage() {
    try {
      let url = '';
      if (this.searchName) {
        url = `${ApiService.BASE_URL}/search/movie/?api_key=${ApiService.API_KEY}&query=${this.searchName}&page=${this.page}`;
      } else {
        url = `${ApiService.BASE_URL}/movie/${this.searchCategory}?api_key=${ApiService.API_KEY}&page=${this.page}`;
      }

      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
