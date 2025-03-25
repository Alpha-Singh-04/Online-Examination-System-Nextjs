import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getExams, getExam, createExam, submitExam as submitExamApi } from "../../services/examService"

export const fetchExams = createAsyncThunk("exams/fetchExams", async () => {
  const response = await getExams()
  return response.data
})

export const fetchExam = createAsyncThunk("exams/fetchExam", async (id) => {
  const response = await getExam(id)
  return response.data
})

export const createNewExam = createAsyncThunk("exams/createExam", async (examData) => {
  const response = await createExam(examData)
  return response.data
})

export const submitExam = createAsyncThunk("exams/submitExam", async (answers) => {
  const response = await submitExamApi(answers)
  return response.data
})

const examsSlice = createSlice({
  name: "exams",
  initialState: {
    exams: [],
    currentExam: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.loading = false
        state.exams = action.payload
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchExam.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchExam.fulfilled, (state, action) => {
        state.loading = false
        state.currentExam = action.payload
      })
      .addCase(fetchExam.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(createNewExam.fulfilled, (state, action) => {
        state.exams.push(action.payload)
      })
      .addCase(submitExam.fulfilled, (state, action) => {
        // Handle exam submission result if needed
      })
  },
})

export default examsSlice.reducer

