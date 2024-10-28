import createHTTPClient from './httpClient';

const BASE_URL = 'http://localhost:8000/search';
const TIMEOUT = 5000;

class lawsuitsAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  search(query) {
    return this.client.post('', { query })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error in API call:', error);
    });
  }
}

export default new lawsuitsAPI(BASE_URL, TIMEOUT);