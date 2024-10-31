import createHTTPClient from './httpClient';

const BASE_URL = 'http://localhost:9777/box-lock';
const TIMEOUT = 5000;

class nextPlanAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  async getPlan() {
    try {
      const response = await this.client.get('');
      return response.data;
    } catch (error) {
      console.error('Error in API call:', error);
    }
  }
}

export default new nextPlanAPI(BASE_URL, TIMEOUT);
