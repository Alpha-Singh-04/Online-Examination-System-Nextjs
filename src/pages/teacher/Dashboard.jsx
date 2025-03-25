"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExams } from "../../features/exams/examsSlice"
import ExamList from "../../components/teacher/ExamList"
import CreateExamForm from "../../components/teacher/CreateExamForm"

function TeacherDashboard() {
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
      <h1 className="text-2xl font-semibold text-gray-900">Teacher Dashboard</h1>
      <CreateExamForm />
      <ExamList exams={exams} />
    </div>
  )
}

export default TeacherDashboard

