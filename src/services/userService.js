import axios from "axios"

const API_URL = "/api/users"

export const getUsers = () => {
  return axios.get(API_URL)
}

