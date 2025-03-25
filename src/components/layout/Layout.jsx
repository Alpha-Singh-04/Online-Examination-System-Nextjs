import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

