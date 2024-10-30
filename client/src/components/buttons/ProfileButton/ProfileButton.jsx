import './ProfileButton.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProfileButton = ({ children, href, condition }) => {
  const location = useLocation()

  return (
    <div
      className={`ms-2 mobile-pb ${
        location.pathname === `${condition}`
          ? 'visible link-underline-opacity-100 d-inline-block'
          : 'invisible link-underline-opacity-0 d-none'
      }`}
    >
      <a className='btn btn-dark btn-profile' href={href}>
        {children}
      </a>
    </div>
  )
}

export default ProfileButton
