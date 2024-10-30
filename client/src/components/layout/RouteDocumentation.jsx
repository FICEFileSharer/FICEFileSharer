import React from 'react'
import { DocNavbar } from '../docNavbar'

function RouteDocumentation({ children }) {
  return (
    <div className='d-flex'>
      <DocNavbar />
      {children}
    </div>
  )
}

export default RouteDocumentation
