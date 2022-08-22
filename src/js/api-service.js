import axios from 'axios';

export default class ApiService {
  static #API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';
  static #BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.searchQuery = 'popular';
  }

  async fetchImages() {
    try {
      const url = `${ApiService.#BASE_URL}/movie/${this.searchQuery}?api_key=${
        ApiService.#API_KEY
      }`;

      return axios.get(url);
    } catch (error) {
      console.error(error);
    }
  }
}
