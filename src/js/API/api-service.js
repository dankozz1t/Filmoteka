import axios from 'axios';
import { spinnerOn } from '../components/spinner.js';
import { spinnerOff } from '../components/spinner.js';
class ApiService {
  static API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';
  static BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.searchCategory = 'popular';
    this.searchName = '';
    this.films = null;
    this.page = 1;
    this.totalPages = 1000;
    this.watchedPage = 1;
    this.totalWatchedPages = 77;
    this.qeuePage = 1;
    this.totalQeuePages = 99;
    this.allGenres = null;
    this.trendingPosters = [];
    this.watched = JSON.parse(localStorage.getItem('watched')) ?? [];
    this.qeue = JSON.parse(localStorage.getItem('qeue')) ?? [];
    this.currentName = '';
  }

  async fetchFilms() {
    try {
      const url = `${ApiService.BASE_URL}/trending/movie/week?api_key=${ApiService.API_KEY}`;
      const data = await axios.get(url);
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      this.trendingPosters = data.data.results.map(el => el.poster_path);

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchImagesByName(query) {
    try {
      const url = `${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${query}`;
      const data = await axios.get(url);
      this.films = data.data.results;

      if (!query) {
        this.page = data.data.page;
        this.totalPages = data.data.total_pages;
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchImagesByPage() {
    spinnerOn();
    try {
      let url = '';
      if (this.searchName) {
        url = `${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${this.searchName}&page=${this.page}`;
      } else {
        url = `${ApiService.BASE_URL}/trending/movie/week?api_key=${ApiService.API_KEY}&page=${this.page}`;
      }

      const data = await axios.get(url).finally(() => {
        spinnerOff();
      });
      this.films = data.data.results;
      this.page = data.data.page;
      this.totalPages = data.data.total_pages;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  fetchWatched() {
    const perPage = 3;
    this.totalWatchedPages = Math.ceil(this.watched.length / perPage);
    this.watched.length < perPage
      ? 1
      : Math.ceil(this.watched.length / perPage);

    if (this.watched.length > perPage) {
      this.films =
        this.watchedPage === 1
          ? this.watched.slice(0, perPage)
          : this.watched.slice(
              (this.watchedPage - 1) * perPage,
              this.watchedPage * perPage
            );
    } else {
      this.films = this.watched;
    }

    return this.films;
  }

  fetchQeue() {
    const perPage = 3;
    this.totalQeuePages = Math.ceil(this.qeue.length / perPage);
    this.qeue.length < perPage ? 1 : Math.ceil(this.qeue.length / perPage);
    if (this.qeue.length > perPage) {
      this.films =
        this.qeuePage === 1
          ? this.qeue.slice(0, perPage)
          : this.qeue.slice(
              (this.qeuePage - 1) * perPage,
              this.qeuePage * perPage
            );
    } else {
      this.films = this.qeue;
    }
    return this.films;
  }

  async fetchGenres() {
    const genres = localStorage.getItem('genres');
    if (genres) {
      this.allGenres = JSON.parse(genres);
      return this.allGenres;
    } else {
      try {
        const url = `${ApiService.BASE_URL}/genre/movie/list?api_key=${ApiService.API_KEY}`;
        const data = await axios.get(url);
        localStorage.setItem('genres', JSON.stringify(data.data.genres));
        this.allGenres = data.data.genres;
        return this.allGenres;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export const apiService = new ApiService();
