import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./components/layout/Layout"
import PrivateRoute from "./components/common/PrivateRoute"
import AdminDashboard from "./pages/admin/Dashboard"
import TeacherDashboard from "./pages/teacher/Dashboard"
import StudentDashboard from "./pages/student/Dashboard"
import ExamPage from "./pages/exam/ExamPage"
import LoginPage from "./pages/auth/LoginPage"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/admin" component={AdminDashboard} />
          <PrivateRoute path="/teacher" component={TeacherDashboard} />
          <PrivateRoute path="/student" component={StudentDashboard} />
          <PrivateRoute path="/exam/:id" component={ExamPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App

