import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.mercos.com/api-teste-front',
});

export default api;
