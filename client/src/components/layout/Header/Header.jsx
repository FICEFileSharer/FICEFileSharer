import './Header.css'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProfileButton } from '../../buttons'
import { SearchBar } from '../../searchInput'

const Header = () => {
  const location = useLocation()

  const headerLinks = [
    { href: '/login', condition: '/', label: 'Логін' },
    { href: '/', condition: '/login', label: 'Профіль' },
  ]

  const renderHeaderButtons = (links) => {
    return links.map((link, index) => (
      <ProfileButton key={index} href={link.href} condition={link.condition}>
        {link.label}
      </ProfileButton>
    ))
  }

  return (
    <header>
      <nav
        className='navbar navbar-expand-lg fixed-top bg-opacity-100 bg-navbar'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            FICE File Sharer
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarMenu'
            aria-controls='navbarMenu'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarMenu'>
            <ul className='navbar-nav nav-underline me-auto'>
              <a className='nav-form' href='/'>
                <li className='nav-item mobile-pb'>
                  <div
                    className={`d-inline-flex nav-link ${
                      location.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    <i className='bi bi-house'></i>

                    <div className='ps-2'>Головна</div>
                  </div>
                </li>
              </a>
            </ul>

            <SearchBar> </SearchBar>

            {renderHeaderButtons(headerLinks)}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
