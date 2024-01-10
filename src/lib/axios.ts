import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'X-GitHub-Api-Version: 2022-11-28',
  },
})
