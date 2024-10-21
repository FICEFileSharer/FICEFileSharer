import React from 'react'

const WelcomePage = () => {
  return (
    <div>
      <div className='d-flex h-100 text-center text-white bg-dark'>
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
          <header className='mb-auto'></header>

          <h1>FICE File Sharer</h1>

          <p>
            Файловий шерер для студентів КПІ ФІОТ — це веб-додаток, який дозволяє
            студентам зручно завантажувати, зберігати та обмінюватися файлами в
            межах навчальних груп.
          </p>

          <p>
            <a 
              href='/login' 
              className='btn btn-lg btn-outline-light '
            >
              Розпочати роботу
            </a>
          </p>

          <footer className='mt-auto text-white-50'>
            <p>
              Вихідний код застосунку доступний на{' '}
              <a
                href='https://github.com/FICEFileSharer/FICEFileSharer'
                className='text-white'
              >
                GitHub <i className='bi bi-github'></i>
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
