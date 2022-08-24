export default function renderItem(array) {
  const markup = array
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date = '',
        vote_average,
        id,
      }) => {
        const newPosterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : '#';
        return `<li class="content__item" id="${id}">
    <div class="content__film-image noImg">
<img src="${newPosterPath}" alt="${title}" class="card-gallery-image"/>
    </div>

<div class="content__film-info">
    <p class="content__film-name">${title}</p>
    <p class="content__film-subscription">${genre_ids} &#10072 ${release_date.slice(
          0,
          4
        )}<span class="accent-box visually-hidden">${vote_average}</span></p>    
</div>
</div>
</li>`;
      }
    )
    .join('');
  return markup;
}
