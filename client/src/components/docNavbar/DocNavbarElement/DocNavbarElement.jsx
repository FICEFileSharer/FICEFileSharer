import React from 'react'
import { useLocation } from 'react-router-dom'

const DocNavbarElement = ({ children, href }) => {
  const location = useLocation()

  return (
    <a className='nav-form' href={href}>
      <li className='nav-item mobile-pb'>
        <div
          className={`d-inline-flex nav-link ps-2 ${
            location.pathname === `${href}` ? 'active' : ''
          }`}
        >
          {children}
        </div>
      </li>
    </a>
  )
}

export default DocNavbarElement
