import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
  return (
  <>
    <Header />
    <main style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {children}
      <Outlet/>
    </main>
  </>
  )
}

export default Layout
