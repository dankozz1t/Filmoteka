import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
const apiService = new ApiService();

apiService.fetchImages().then(({ data }) => {
  console.log(data);
});

toggleBackdrop();
