import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../contexts/User'


const SignIn = () => {
  const { signIn } = useUser()
  const [state, setState] = useState({ username: '', password: '' })

  const handleChange = useCallback(
    ({ target: { name, value }}) => 
      setState(state => ({ ...state, [name]: value }))
      , []
    )

  const handleLogin = useCallback(
    () => signIn(state)
  , [state])

  return (
    <div>
      Signin
      <label>username</label>
      <input type='text' name='username' value={state.username} onChange={handleChange} />
      <label>password</label>
      <input type='password' name="password" value={state.password} onChange={handleChange} />
      <button type='button' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default SignIn