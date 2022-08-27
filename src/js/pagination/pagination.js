import { refs } from '../references/reference.js';
import { getActivePage } from '../getPages/getActivePage.js';

export function renderPagination(page, total) {
  let markup = '';
  if (page > 1) {
    markup += `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
         &#8592
       </button>
     </li>`;
  }
  if (page > 1) {
    if (total < 6) {
      markup += `<li>
       <button class="pagination__btn pagination__first js-first js-first-no-hide" type="button">1</button>
      </li>`;
    } else {
      markup += `<li>
       <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>`;
    }
  }
  if (page > 4) {
    markup += `<li><p class="pagination__btn pagination__rest" type="button">...</p></li>`;
  }
  if (page > 3) {
    markup += `<li>
          <button class="pagination__btn js-second-previous" type="button">${
            page - 2
          }</button>
      </li>`;
  }
  if (page > 2) {
    markup += `<li>
          <button class="pagination__btn js-previous" type="button">${
            page - 1
          }</button>
      </li>`;
  }

  markup += `<li><button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button></li>`;

  if (total - 1 > page) {
    markup += `<li>
          <button class="pagination__btn js-next" type="button">${
            page + 1
          }</button>
   </li>`;
  }
  if (total - 2 > page) {
    markup += `<li>
          <button class="pagination__btn js-second-next" type="button">${
            page + 2
          }</button>
   </li>`;
  }
  if (total - 3 > page) {
    markup += `<li><p class="pagination__btn pagination__rest" type="button">...</p></li>`;
  }
  if (total > page) {
    if (total < 6) {
      markup += `<li>
       <button class="pagination__btn pagination__last js-last js-last-no-hide" type="button">${total}</button>
      </li>`;
      markup += `<li>
          <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
          </button>
          </li>`;
    } else {
      markup += `<li>
          <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
          </li>
          <li>`;
      markup += `<li>
          <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
          </button>
          </li>`;
    }
  }
  refs.paginationControls.innerHTML = markup;
}
