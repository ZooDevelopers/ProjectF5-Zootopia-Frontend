// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true // Asegúrate de que las cookies se envíen con cada solicitud
});

export function getSpecies() {
  return api.get('/species'); // Usa '/species' si el backend está configurado para este endpoint
}
