import React from 'react'
import { useLocation } from "react-router-dom"

const ErrorPage = () => {
  const location = useLocation()
  console.error(location)

  return <div>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    {/* <p><i>{error.statusText || error.message}</i></p> */}
    <p>{location.pathname} not found</p>
  </div>
}

export default ErrorPage
