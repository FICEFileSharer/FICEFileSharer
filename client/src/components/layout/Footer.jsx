import React from 'react'
import FooterButton from '../buttons/FooterButton/FooterButton'

const Footer = () => {
  const footerLinks = [
    {
      href: 'https://github.com/FICEFileSharer/FICEFileSharer',
      label: 'GitHub',
      icon: 'bi-github',
    },
    { href: '/aboutus', label: 'Про нас' },
    { href: '/terms', label: 'Умови використання' },
    { href: '/privacy', label: 'Конфіденційність' },
    { href: '/security', label: 'Безпека' },
  ]

  const renderFooterButtons = (links) => {
    return links.map((link, index) => (
      <FooterButton key={index} href={link.href}>
        {link.label} {link.icon && <i className={`bi ${link.icon}`}></i>}
      </FooterButton>
    ))
  }

  return (
    <footer className='mt-auto bd-footer'>
      <div className='d-flex flex-wrap justify-content-center bg-dark-202020 p-3 gap-3'>
        {renderFooterButtons(footerLinks)}
      </div>
    </footer>
  )
}

export default Footer
