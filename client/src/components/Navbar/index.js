import React, { useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/User'

const supportItems = [
  {
    label: 'Contact Us',
    path: '/contact-us',
  },
  {
    label: 'FAQ',
    path: '/faq'
  }
]

const userNavItems = [
  {
    label: 'Projects',
    path: '/projects',
    // children: [
    //   {
    //     label: 'Xiangqi',
    //     path: 'https://www.xiangi.com',
    //     external: true,
    //   },
    //   {
    //     label: 'stockguard',
    //     path: 'https://www.stockguard.io',
    //     external: true,
    //   }
    // ]
  }
]

const Navbar = ({ orientation = 'horizontal' }) => {
  const navigate = useNavigate()
  const { user } = useUser()

  const navItems = useMemo(() =>
    [!!user && userNavItems, supportItems]
      .flat()
      .filter(Boolean)
    , [user])

  console.log('navItems=> ', navItems)

  const handleClick = useCallback(path => {
    navigate(path)
  }, [])

  const getMenuItem = useCallback(
    ({ label, path }) =>
      <button onClick={() => handleClick(path)}>
        {label}
      </button>
    , [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column'
      }}
    >
      {
        navItems.map(item => getMenuItem(item))
      }
    </div>
  )
}

export default Navbar