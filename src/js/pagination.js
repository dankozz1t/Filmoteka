import { refs } from './reference.js';

export function renderPagination(page, total) {
  let markup = '';
  if (page === 1) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn js-second-next" type="button">${
          page + 2
        }</button>
      </li>
      <li><p class="pagination__btn pagination__rest" type="button">...</p></li>

      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === 2) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
                <svg class="backdrop__icon js-next" width="15" height="15">
        <use class="js-next" href="./images/symbol-defs.svg#icon-left"></use>
      </svg>
        </button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn js-second-next" type="button">${
          page + 2
        }</button>
      </li>
      <li><p class="pagination__btn pagination__rest" type="button">...</p></li>

      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === 3) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
          &#8592
        </button>
      </li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn js-second-next" type="button">${
          page + 2
        }</button>
      </li>
      <li><p class="pagination__btn pagination__rest" type="button">...</p></li>

      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page > 3 && page < total - 3) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
            &#8592
        </button>
         <li>
        <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>
      </li>
       <li><p class="pagination__btn pagination__rest" type="button">...</p></li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn js-second-next" type="button">${
          page + 2
        }</button>
      </li>
      <li><p class="pagination__btn pagination__rest" type="button">...</p></li>

      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === total - 3) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
          &#8592
        </button>
         <li>
        <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>
      </li>
       <li><p class="pagination__btn pagination__rest" type="button">...</p></li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn js-second-next" type="button">${
          page + 2
        }</button>
      </li>


      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === total - 2) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
          &#8592
        </button>
         <li>
        <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>
      </li>
       <li><p class="pagination__btn pagination__rest" type="button">...</p></li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
    <li>
        <button class="pagination__btn js-next" type="button">${
          page + 1
        }</button>
      </li>
      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === total - 1) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
          &#8592
        </button>
         <li>
        <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>
      </li>
       <li><p class="pagination__btn pagination__rest" type="button">...</p></li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__last js-last" type="button">${total}</button>
      </li>
      <li>
        <button class="pagination__btn pagination__btn--pale js-next" type="button">
          &#8594
        </button>
      </li>`;
  } else if (page === total) {
    markup = `<li>
        <button class="pagination__btn pagination__btn--pale js-previous" type="button">
          &#8592
        </button>
         <li>
        <button class="pagination__btn pagination__first js-first" type="button">1</button>
      </li>
      </li>
       <li><p class="pagination__btn pagination__rest" type="button">...</p></li>
      <li>
        <button class="pagination__btn js-second-previous" type="button">${
          page - 2
        }</button>
      </li>
        <li>
        <button class="pagination__btn js-previous" type="button">${
          page - 1
        }</button>
      </li>
    <li>
      <li>
        <button class="pagination__btn pagination__btn--accent js-current" type="button">${page}</button>
      </li>
     `;
  }
  refs.paginationControls.innerHTML = markup;
}
