import axios from 'axios';

const originalURL = 'https://sandbox.mercos.com/api-teste-front';
const queryURL = `https://cors-anywhere.herokuapp.com/${originalURL}`;

const api = axios.create({
  baseURL: queryURL,
});

export default api;
