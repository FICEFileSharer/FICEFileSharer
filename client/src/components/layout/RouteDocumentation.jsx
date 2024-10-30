import React from 'react'
import DocNavbar from '../docNavbar/DocNavbar/DocNavbar'

function RouteDocumentation({ children }) {
  return (
    <div className='d-flex'>
      <DocNavbar />
      {children}
    </div>
  )
}

export default RouteDocumentation
