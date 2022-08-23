import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import renderItem from './templates/template-item.js';

const refs = {
  contentList: document.querySelector('.content__list'),
  form: document.querySelector('#search-form'),

};

const apiService = new ApiService();

apiService.fetchFilms().then(({ data }) => {
  // console.log(data);
  refs.contentList.insertAdjacentHTML('beforeend', renderItem(data.results));
  console.log(apiService.films);
});
// console.log(apiService.films);
toggleBackdrop();


refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  e.target.elements.query.value = '';

  apiService.fetchImagesByName(query).then(({ data }) => {
    // console.log(data.results);
     refs.contentList.innerHTML = renderItem(data.results)
  });
}