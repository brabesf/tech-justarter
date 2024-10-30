import createHTTPClient from './httpClient';

const BASE_URL = 'http://localhost:9777/experiment/participate';
const TIMEOUT = 5000;

class experimentAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  async getExperiment(alternative, simulating) {
    try {
      const response = await this.client.get('', { alternative, simulating });
      return response.data;
    } catch (error) {
      console.error('Error in API call:', error);
    }
  }
}

export default new experimentAPI(BASE_URL, TIMEOUT);