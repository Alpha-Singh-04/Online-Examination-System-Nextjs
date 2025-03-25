"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExams } from "../../features/exams/examsSlice"
import ExamList from "../../components/student/ExamList"

function StudentDashboard() {
  const dispatch = useDispatch()
  const { exams, loading, error } = useSelector((state) => state.exams)

  useEffect(() => {
    dispatch(fetchExams())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Student Dashboard</h1>
      <ExamList exams={exams} />
    </div>
  )
}

export default StudentDashboard

