import axios from 'axios'

axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axios
