import './FooterButton.css'
import React from 'react'

const FooterButton = ({ children, href }) => {
  return (
    <a href={href} className='text-decoration-none text-white btn-footer'>
      {children}
    </a>
  )
}

export default FooterButton
