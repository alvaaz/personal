import * as React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
