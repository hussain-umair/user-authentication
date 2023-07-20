import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import { useUser } from './contexts/User'
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ErrorPage = lazy(() => import('./pages/Error'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'))
const  SignIn = lazy(() => import('./pages/Account/SignIn'))
const Account = lazy(() => import('./pages/Account'))

const checkAccess = (user, accessRoles) => {
  if (accessRoles) {
    if (!user) {
      return false
    }
    return true
  }
  return true
}

const routes = [
  {
    index: true,
    element: Home
  },
  {
    path: '/account',
    element: Account,
    children: [
      {
        path: '/account/signin',
        element: SignIn
      }
    ]
  },
  {
    path: '/faq',
    element: FAQ,
  },
  {
    path: '/contact-us',
    element: ContactUs
  },
  {
    path: '/projects',
    element: Projects,
    accessRoles: []
  },
]

const App = () => {
  const { user } = useUser()
  const makeRoutes = (routes, depth = 0) =>
    routes.map(({ element, children, accessRoles, ...routeProps }, ind) => {
      const hasAccess = checkAccess(user, accessRoles)

      const Content = hasAccess ? element : () => <ProtectedRoute />
      const subRoutes = children && makeRoutes(children, depth + 1)

      return (
        <Route
          key={`app-route-${ind}-${depth}`}
          element={
            <Suspense fallback={<>...</>}>
              <Content />
            </Suspense>
          }
          {...routeProps}
          >
            {subRoutes}
          </Route>
      )
    }
  )

	return (
  <Routes>
		<Route path='/' element={<Layout />} errorElement={<ErrorPage />} >
      {makeRoutes(routes)}
      <Route
        path="*"
        element={
          <Suspense fallback={<>...</>}>
            <ErrorPage />
          </Suspense>
        }>
      </Route>
		</Route>
	</Routes>
  )
}

export default App