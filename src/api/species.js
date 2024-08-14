import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true // Asegura que las cookies se envíen con cada solicitud
});

export function getSpecies() {
  return api.get('/species'); // Endpoint para obtener la lista de especies
}
