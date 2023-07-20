import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { localStorage } from "../../utils";

const UserContext = createContext()
const { Provider } = UserContext
const getUser = () => localStorage.get('user')

const useProvideUser = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = getUser()
    console.log('user=> ', user)
    if (user) setUser(user)
  }, [])

  return {
    user,
    setUser,
    signIn: ({ redirectTo = '/', ...userData }) => {
      localStorage.set('user', userData)
      console.log('userData=> ', userData)
      setUser(userData)
      navigate(redirectTo, { replace: true })
    },
    signOut: () => {
      localStorage.remove('user')
      setUser(null)
      navigate('/', { replace: true })
    }
  }
}

export const UserProvider = ({ children }) => {
  const userContext = useProvideUser()
  return <Provider value={userContext}>{children}</Provider>
}

export const useUser = () => useContext(UserContext)