import axios from "axios"

const API_URL = "/api/exams"

export const getExams = () => {
  return axios.get(API_URL)
}

export const getExam = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createExam = (examData) => {
  return axios.post(API_URL, examData)
}

export const submitExam = (answers) => {
  return axios.post(`${API_URL}/submit`, answers)
}

