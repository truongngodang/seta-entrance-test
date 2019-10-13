import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'content-type': 'application/json' }
});


API.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request
});

API.interceptors.response.use(response => {
  console.log('Response:', response);
  return response
});

export default {
  getBlogs() {
    return API.get('/posts/');
  },
};
