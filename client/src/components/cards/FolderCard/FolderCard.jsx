import './FolderCard.css'
import React from 'react'

const FolderCard = ({ card, style_class }) => {
  return (
    <a
      className={`text-decoration-none text-white folder-card border border-2 border-white rounded-4 ${style_class}`}
      href={card.href}
    >
      <div>
        <i className='bi bi-folder2-open fs-0-5'></i>

        <h3 className='ms-sm-2 fs-4 text-truncate' title={card.name}>
          {card.name}
        </h3>

        <div className='text-start ms-sm-2 text-truncate' title={card.creator}>
          {card.creator}
        </div>

        <div className='text-end me-sm-2 fs-7 pb-2 text-grey-500'>
          {card.day}.{card.month}.{card.year}, {card.time}
        </div>
      </div>
    </a>
  )
}

export default FolderCard
