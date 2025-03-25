import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/auth/authSlice"

function Header() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="/logo.svg" alt="" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {user?.role === "admin" && (
                <Link to="/admin" className="text-base font-medium text-white hover:text-indigo-50">
                  Admin
                </Link>
              )}
              {user?.role === "teacher" && (
                <Link to="/teacher" className="text-base font-medium text-white hover:text-indigo-50">
                  Teacher
                </Link>
              )}
              {user?.role === "student" && (
                <Link to="/student" className="text-base font-medium text-white hover:text-indigo-50">
                  Student
                </Link>
              )}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

