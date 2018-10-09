import axios from 'axios'

const TOKEN_KEY = 'JWT_TOKEN_KEY'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
})

export function authorize(token) {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
    localStorage.setItem(TOKEN_KEY, token)
  }
}
authorize(localStorage.getItem(TOKEN_KEY))

export function unauthorize() {
  delete api.defaults.headers.Authorization
  localStorage.removeItem(TOKEN_KEY)
}

export default api
