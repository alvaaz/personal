import * as React from 'react'
import { Link } from 'gatsby'

const Header: React.FC = ({ children }) => {
  return (
    <header className="bg-red-lighter mb-24">
      <div className="circle"></div>
      <nav className="container grid gap-8 grid-cols-12 mx-auto mb-24 pt-8">
        <Link to="/" className="text-3xl font-bold text-black hover:text-red">
          Álvaro
        </Link>
      </nav>
      {children}
    </header>
  )
}

export default Header
