import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export function getSpecies() {
  return api.get('/species');
}

export function filterSpecies(family, type) {
  return api.get('/species/filter', {
    params: { family, type }
  });
}
