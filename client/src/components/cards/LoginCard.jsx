import React from 'react'

const LoginCard = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  return (
    <div>
      <h2>FICE File Sharer</h2>

      <div
        class='card border-dark mb-3 text-light'
        style={{ maxWidth: '30rem', minWidth: '20rem' }}
      >
        <div class='card-header text-light'>Увійти</div>
        <div class='card-body'>
          <div className='d-grid'>
            <a
              href={`${apiUrl}/auth/google/login`}
              class='btn btn-outline-light btn-lg'
            >
              Вхід через <i className='bi bi-google'></i>
            </a>

            <hr class='hr' />
            <a
              href={`${apiUrl}/auth/github/login`}
              class='btn btn-outline-light btn-lg'
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
