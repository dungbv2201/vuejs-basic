import axios from 'axios'

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

request.interceptors.response.use(response => {
  response.data = response.data.slice(0, 10)
  return response
})
export default request