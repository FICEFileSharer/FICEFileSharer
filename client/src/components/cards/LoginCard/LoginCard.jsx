import './LoginCard.css'
import React from 'react'

const LoginCard = () => {
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <div>
      <h2>FICE File Sharer</h2>

      <div className='card border-light border-2 mb-3 text-light card-size'>
        <div className='card-header text-light'>Увійти</div>

        <div className='card-body'>
          <div className='d-grid'>
            <a
              href={`${apiUrl}/auth/google/login`}
              className='btn btn-outline-light btn-lg'
            >
              Вхід через <i className='bi bi-google'></i>
            </a>

            <hr className='hr' />

            <a
              href={`${apiUrl}/auth/github/login`}
              className='btn btn-outline-light btn-lg'
            >
              Вхід через <i className='bi bi-github'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
