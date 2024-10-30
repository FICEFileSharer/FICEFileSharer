import React from 'react'
import { LoginCard } from '../components'
const LoginPage = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center 
        vh-100 vw-100 position-fixed top-0 bottom-0 start-0 end-0'
    >
      <LoginCard></LoginCard>
    </div>
  )
}

export default LoginPage
