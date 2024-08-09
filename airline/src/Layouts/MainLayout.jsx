
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
