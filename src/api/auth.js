import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/api/v1/login';

const authApi = axios.create({
  baseURL: LOGIN_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export function login(username, password) {
  const credentials = btoa(`${username}:${password}`);
  return authApi.post('/login', {}, {
    headers: {
      'Authorization': `Basic ${credentials}`
    }
  });
}
