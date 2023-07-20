import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const countdownSeconds = 5

const ProtectedRoute = () => {
  // const navigate = useNavigate()
  // const [timer, setTimer] = useState(countdownSeconds)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (timer === 1) navigate('/', { replace: true })
  //     setTimer(timer - 1)
  //   }, 1000)

  //   return () => {
  //     clearTimeout()
  //   }
  // }, [timer])


	return <div>
    <div>
      Sorry! you don't have access to this page
    </div>
    redirecting in {timer}
    </div>
}

export default ProtectedRoute