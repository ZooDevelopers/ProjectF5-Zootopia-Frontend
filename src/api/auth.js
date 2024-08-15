import axios from 'axios';



const LOGIN_URL = import.meta.env.VITE_API_ENDPOINT_LOGIN;

const authApi = axios.create({
  baseURL: LOGIN_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

export function login(username, password) {
  const credentials = btoa(`${username}:${password}`);

  return authApi.post('', {}, {
    headers: {
      'Authorization': `Basic ${credentials}`
    }
  })
  .then(response => {
    console.log('Login successful', response);
    return response; 
  })
  .catch(error => {
    console.error('Authentication error:', error);
    throw error; 
  });
}

export function fetchData() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/v1/login',
    headers: { 
      'Authorization': 'Basic ' + btoa('admin:password'), 
      'Cookie': 'JSESSIONID=901D32C31BFF60DFDFE1031763237755' 
    },
    withCredentials: true,
  };

  return authApi.request(config)
  .then(response => {
    console.log('Data fetched successfully', response.data);
    return response.data; 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    throw error;
  });
}
