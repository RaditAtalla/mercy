import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://149.28.129.12:3000',
  baseURL: 'http://66.42.48.47:3005',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
