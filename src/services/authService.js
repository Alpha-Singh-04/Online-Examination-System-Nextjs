import axios from "axios"

const API_URL = "/api/auth"

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials)
}

export const logout = () => {
  return axios.post(`${API_URL}/logout`)
}

