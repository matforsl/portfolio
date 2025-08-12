import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='app'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout
