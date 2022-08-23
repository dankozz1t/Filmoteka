import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import renderItem from './templates/template-item.js';

const refs = {
  contentList: document.querySelector('.content__list'),
};

const apiService = new ApiService();

apiService.fetchImages().then(({ data }) => {
  console.log(data);
  refs.contentList.insertAdjacentHTML('beforeend', renderItem(data.results));
});

toggleBackdrop();
