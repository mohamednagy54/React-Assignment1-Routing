import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="sectionWrapper">
        <Outlet />
      </div>
      <Footer />
      <div className="copyright">
        <p className="text-center text-white">Copyright © Your Website 2025</p>
      </div>
    </div>
  )
}

export default Layout
