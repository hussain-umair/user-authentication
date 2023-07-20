import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/User'
import Navbar from '../Navbar'


const Header = () => {
  const { user, signOut } = useUser()
  const navigate = useNavigate()

  const handleLogin = useCallback(() => {
    navigate('/account/signin')
  }, [])

  const handleLogout = useCallback(() => {
    signOut()
  }, [])

  return <header 
    style={{
      display: 'flex',
      background: 'gray',
      justifyContent: 'space-between',
      padding: 5
    }}
  >
    <div>Umair Custom FullStack App</div>
    <Navbar/>
    {user ?
      <button onClick={handleLogout}>logout</button>
      : <button onClick={handleLogin}>login</button>
    }
  </header>
}

export default Header