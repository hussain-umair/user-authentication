import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './User'


const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <UserProvider>
        {children}
      </UserProvider>
    </BrowserRouter>
  )
}

export default AppProvider