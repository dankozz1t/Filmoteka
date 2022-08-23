import ApiService from './js/api-service.js';

const refs = {
  contentList: document.querySelector('.content__list'),
};

const apiService = new ApiService();

apiService.fetchImages().then(({ data }) => {
  console.log(data);
  refs.contentList.insertAdjacentHTML('beforeend', renderItem(data.results));
});

function renderItem(array) {
  const markup = array
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        return `<li class="content__item" data-id="${id}">
    <div class="content__film-image">
<img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="card-gallery-image"/>
    </div>

<div class="content__film-info">
    <p class="content__film-name">${title}</p>
    <p class="content__film-subscription">${genre_ids} &#10072 ${release_date.slice(
          0,
          4
        )}<span class="is-hidden accent-box">${vote_average}</span></p>    
</div>
</div>
</li>`;
      }
    )
    .join('');
  return markup;
}
