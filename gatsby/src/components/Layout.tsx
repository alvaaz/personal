import * as React from 'react'
import Footer from '../components/Footer'
import { Link } from 'gatsby'

const MainLayout: React.FC = ({ children }) => (
  <>
    <nav className="px-64 flex mx-auto items-center">
      <Link to="/" className="text-3xl font-bold text-black hover:text-red flex-grow">
        Álvaro
      </Link>
      <Link to="/work" className="text-2xl font-semibold text-black">
        Work
      </Link>
      <Link to="/contact" className="text-2xl font-semibold text-black ml-12">
        Contact
      </Link>
    </nav>
    {children}
    <Footer />
  </>
)

export default MainLayout
