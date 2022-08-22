import ApiService from './js/api-service.js';
const apiService = new ApiService();

apiService.fetchImages().then(({ data }) => {
  console.log(data);
});
