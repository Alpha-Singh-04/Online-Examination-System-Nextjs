import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import usersReducer from "../features/users/usersSlice"
import examsReducer from "../features/exams/examsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    exams: examsReducer,
  },
})

