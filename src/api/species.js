import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export function getSpecies() {
  return api.get('/species');
}

export function filterSpecies(family) {
  return api.get('/species/filter', {
    params: { family }
  });
}

export function createSpecies(speciesData) {
  return api.post('/species', speciesData); 
}
