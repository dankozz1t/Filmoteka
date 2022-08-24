import fetchLord from './fetchLord';
import createMarkup from '../templates/cards';
const paginationBox = document.querySelector('.pagination');
let globalCurrentpage = 0;
let globalAllPages = 0;
/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} allPages  - all pages for search
 * @return {String} markup - markup for pagination
 */
export default function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentpage = currentPage;
  globalAllPages = allPages;
  if (currentPage > 1) {
    markup += `<li>&#129144;</li>`;
  }
  if (currentPage > 1) {
    markup += `<li>1</li>`;
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`;
  }
  markup += `<li><b>${currentPage}</b></li>`;
  if (allPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`;
  }

  if (allPages - 2 > currentPage) {
    markup += `<li>${afterTwoPage}</li>`;
  }

  if (allPages - 3 > currentPage) {
    markup += `<li>...</li>`;
  }

  if (allPages > currentPage) {
    markup += `<li>${allPages}</li>`;
    markup += `<li>&#129146;<li>`;
  }

  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', handlerPagination);

function handlerPagination(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  if (evt.target.textContent === '') {
    fetchLord((globalCurrentpage -= 1)).then(data => {
      createMarkup(data);
      pagination(data.page, data.pages);
    });
    return;
  }
  if (evt.target.textContent === '') {
    fetchLord((globalCurrentpage += 1)).then(data => {
      createMarkup(data);
      pagination(data.page, data.pages);
    });
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  const page = evt.target.textContent;
  fetchLord(page).then(data => {
    createMarkup(data);
    pagination(data.page, data.pages);
  });
  console.log(page);
}
