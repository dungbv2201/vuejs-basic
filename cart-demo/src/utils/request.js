import axios from 'axios'

const request = axios.create({
  baseURL: 'http://13.229.233.177/demo-cart/public/api',
  timeout: 3000
});

request.interceptors.response.use(response =>{
  response = response.data
  return response
});

export default request