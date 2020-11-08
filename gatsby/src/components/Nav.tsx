import React from 'react'
import { Link } from 'gatsby'
import { ThemeContext } from './ThemeProvider'

export default function Nav() {
  const { darkMode } = React.useContext(ThemeContext)
  return (
    <nav
      className={`px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex mx-auto items-center pt-8 pb-32 overflow-x-hidden ${
        darkMode ? 'bg-red-lighter' : ''
      }`}
    >
      <div className="circle"></div>
      <Link to="/" className="text-2xl sm:text-3xl font-bold text-black hover:text-red mr-auto">
        Álvaro
      </Link>
      <Link
        to="/work"
        activeClassName="border-white"
        className="text-xl sm:text-2xl font-semibold text-white z-10 border-b-2 border-solid border-transparent hover:border-white"
      >
        Portafolio
      </Link>
    </nav>
  )
}
