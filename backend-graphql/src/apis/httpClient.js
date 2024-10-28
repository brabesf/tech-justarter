import axios from 'axios';

function createHTTPClient(baseURL, timeout = 5000) {
  if (!baseURL) {
    throw new Error('missing baseURL');
  }

  return axios.create({
    baseURL,
    timeout,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export default createHTTPClient;
