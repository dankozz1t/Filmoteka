function renderItem(array) {
  const markup = array
    .map({ poster_path, title, genre_ids, release_date, vote_average }, () => {
      `<li class="content__item">
    <div class="content__film-image">
<img src="${poster_path}" alt="${title}" class="card-gallery-image"/>
    </div>
<div>
    <p class="content__film-name">${title}</p>
</div>
<div class="content__film-info">
    <p><span>${genre_ids}</span> | <span>${release_date}</span></p>
    <p class="card-gallery__rate">${vote_average}</p>
</div>
</div>
</li>`;
    })
    .join('');
  return markup;
}
