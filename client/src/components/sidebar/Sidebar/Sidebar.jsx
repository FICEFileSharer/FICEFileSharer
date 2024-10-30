import './Sidebar.css'
import React, { useState } from 'react'
import SidebarElement from '../SidebarElement/SidebarElement'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    if (isOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setIsOpen(false)
      }, 300)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div
      className={`sidebar ${
        isOpen || isAnimating ? 'bg-transparent start-0' : ''
      }`}
    >
      <nav
        className='navbar navbar-expand-lg bg-opacity-100 position-fixed'
        data-bs-theme='dark'
      >
        <div
          className={`container-fluid ${
            isOpen || isAnimating ? 'bg-dark-101010' : ''
          }`}
        >
          <button
            className='navbar-toggler'
            type='button'
            onClick={handleToggle}
            data-bs-toggle='collapse'
            data-bs-target='#sidebarMenu'
            aria-controls='sidebarMenu'
            aria-expanded={isOpen}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='sidebarMenu'>
            <ul className='navbar-nav me-auto flex-column'>
              <SidebarElement href='/aboutus'>Про нас</SidebarElement>

              <SidebarElement href='/terms'>Умови використання</SidebarElement>

              <SidebarElement href='/privacy'>Конфіденційність</SidebarElement>

              <SidebarElement href='/security'>Безпека</SidebarElement>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
