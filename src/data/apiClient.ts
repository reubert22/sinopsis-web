import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: { Accept: 'application/json' },
  params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
})
