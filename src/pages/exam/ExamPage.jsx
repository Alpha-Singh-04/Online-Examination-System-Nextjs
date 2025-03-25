"use client"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchExam } from "../../features/exams/examsSlice"
import ExamQuestions from "../../components/exam/ExamQuestions"

function ExamPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentExam, loading, error } = useSelector((state) => state.exams)

  useEffect(() => {
    dispatch(fetchExam(id))
  }, [dispatch, id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!currentExam) {
    return <div>Exam not found</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">{currentExam.title}</h1>
      <ExamQuestions questions={currentExam.questions} />
    </div>
  )
}

export default ExamPage

