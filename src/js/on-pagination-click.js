export function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-next')) {
    apiService.page += 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-previous')) {
    apiService.page -= 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-previous')) {
    apiService.page -= 2;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-next')) {
    apiService.page += 2;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-first')) {
    apiService.page = 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-last')) {
    apiService.page = apiService.totalPages;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
}
