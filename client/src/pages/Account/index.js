import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/User'

const Account = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
      return
    }
    if (location.pathname === '/account') {
      navigate('/account/signin', { replace: true })
    }
  }, [])

  return <div>Account<Outlet /></div>
}

export default Account