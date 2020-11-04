import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav className="px-12 sm:px-24 md:32 lg:48 xl:px-64 flex mx-auto items-center pt-8 pb-32 bg-red-lighter">
      <div className="circle"></div>
      <Link to="/" className="text-3xl font-bold text-black hover:text-red mr-auto">
        Álvaro
      </Link>
      <Link
        to="/work"
        activeClassName="border-white"
        className="text-2xl font-semibold text-white z-10 border-b-2 border-solid border-transparent hover:border-white"
      >
        Work
      </Link>
    </nav>
  )
}
