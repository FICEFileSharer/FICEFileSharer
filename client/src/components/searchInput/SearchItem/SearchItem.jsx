import './SearchItem.css'
import React from 'react'

const SearchItem = ({ element }) => {
  const currentDate = new Date()

  const formatDate = ({ element }) => {
    const itemDate = new Date(element.year, element.month - 1, element.day)

    const itemYear = itemDate.getFullYear()
    const itemMonth = itemDate.getMonth()
    const itemDay = itemDate.getDate()

    if (
      itemYear === currentDate.getFullYear() &&
      itemMonth === currentDate.getMonth() &&
      itemDay === currentDate.getDate()
    ) {
      return `${element.time}`
    }

    if (itemYear === currentDate.getFullYear()) {
      return `${element.day}.${element.month}`
    }

    return `${element.day}.${element.month}.${element.year}`
  }

  return (
    <li className='list-group-item text-start bg-dark-101010 align-items-center'>
      <a className='text-decoration-none text-white' href={element.href}>
        <div className='flex-element align-items-center'>
          <i className='bi bi-folder2 folder-icon fs-3'></i>

          <div className='flex-element folder-inf flex-column'>
            <div className='flex-element flex-space align-items-center'>
              <div
                className='truncated-name text-truncate flex-name'
                title={element.name}
              >
                <strong>{element.name}</strong>
              </div>

              <div
                className='flex-time text-end fs-7'
                title={`${element.day}.${element.month}.${element.year}, ${element.time}`}
              >
                {formatDate({ element })}
              </div>
            </div>

            <div
              className='truncated-creator text-truncate'
              title={element.creator}
            >
              Автор: {element.creator}
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default SearchItem
