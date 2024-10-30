import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import FolderCard from '../components/cards/FolderCard/FolderCard'
import searchData from '../data/searchData.temp'

const WelcomePage = () => {
  const { searchQuery } = useContext(SearchContext)

  const renderFolderCard = (links) => {
    return links.map((link, index) => (
      <FolderCard
        key={index}
        card={link}
        style_class={
          link.name.toLowerCase().includes(searchQuery.toLowerCase())
            ? 'd-inline-block'
            : 'd-none'
        }
      />
    ))
  }

  return (
    <div>
      <div className='d-flex h-100 text-center text-white bg-dark'>
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
          <h1>FICE File Sharer</h1>

          <p>
            Файловий шерер для студентів КПІ ФІОТ — це веб-додаток, який
            дозволяє студентам зручно завантажувати, зберігати та обмінюватися
            файлами в межах навчальних груп.
          </p>

          <p>
            <a href='/login' className='btn btn-lg btn-outline-light'>
              Розпочати роботу
            </a>
          </p>

          <div className='d-flex flex-wrap folder-cont justify-content-center gap-3 mt-3 mb-5 px-2'>
            {renderFolderCard(searchData)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
