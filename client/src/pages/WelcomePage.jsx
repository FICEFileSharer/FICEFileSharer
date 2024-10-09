import React from 'react'
import { redirect } from 'react-router-dom'

const WelcomePage = () => {
  redirect = () => {
    
  }


  return (
    <div>
      <div className='d-flex h-100 text-center text-white bg-dark'>
        <div class='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
          <header class='mb-auto'></header>

          <h1>FICE File Sharer</h1>
          <p>
            Файловий шерер для студентів КПІ ФІОТ — це веб-додаток, який дозволяє
            студентам зручно завантажувати, зберігати та обмінюватися файлами в
            межах навчальних груп.
          </p>
          <p>
            <a href='/login' class='btn btn-lg btn-outline-light '>
              Розпочати роботу
            </a>
          </p>

          <footer class='mt-auto text-white-50'>
            <p>
              Вихідний код застосунку доступний на{' '}
              <a
                href='https://github.com/FICEFileSharer/FICEFileSharer'
                class='text-white'
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
