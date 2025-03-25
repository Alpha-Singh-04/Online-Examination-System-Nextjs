import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login as loginApi, logout as logoutApi } from "../../services/authService"

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await loginApi(credentials)
  return response.data
})

export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutApi()
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export default authSlice.reducer

