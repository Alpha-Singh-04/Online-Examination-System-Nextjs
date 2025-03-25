"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../features/users/usersSlice"
import { fetchExams } from "../../features/exams/examsSlice"
import UserList from "../../components/admin/UserList"
import ExamList from "../../components/admin/ExamList"

function AdminDashboard() {
  const dispatch = useDispatch()
  const { users, loading: usersLoading, error: usersError } = useSelector((state) => state.users)
  const { exams, loading: examsLoading, error: examsError } = useSelector((state) => state.exams)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchExams())
  }, [dispatch])

  if (usersLoading || examsLoading) {
    return <div>Loading...</div>
  }

  if (usersError || examsError) {
    return <div>Error: {usersError || examsError}</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
      <UserList users={users} />
      <ExamList exams={exams} />
    </div>
  )
}

export default AdminDashboard

