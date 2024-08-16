import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export function getSpecies(page = 0, size = 8) {
  return api.get('/species', {
    params: { page, size }
  });
}

export function filterSpecies(family, page = 0, size = 8) {
  return api.get('/species/filter', {
    params: { family, page, size }
  });
}

export function createSpecies(speciesData) {
  return api.post('/species', speciesData);
}

export function deleteSpecies(id) {
  return api.delete(`/species/${id}`);
}
