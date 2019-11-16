import axios from 'axios'

const request = axios.create({
  baseURL: 'https://peaceful-sands-42159.herokuapp.com/api',
  timeout: 3000
});

request.interceptors.response.use(response =>{
  response = response.data
  return response
});

export default request