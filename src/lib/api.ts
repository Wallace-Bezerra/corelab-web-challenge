import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://corenotes-api.vercel.app',
})
