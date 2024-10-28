import React from 'react';
import FooterButton from './buttons/FooterButton/FooterButton';

const Footer = () => {
  return (
        <footer className='mt-auto bd-footer'>
            <div className='d-flex flex-wrap justify-content-center bg-dark-202020 p-3 gap-3'>
                <FooterButton 
                    href='https://github.com/FICEFileSharer/FICEFileSharer'
                >
                    GitHub <i className='bi bi-github'></i>
                </FooterButton>

                <FooterButton 
                    href='/aboutus'
                >
                    Про нас
                </FooterButton>

                <FooterButton 
                    href='/'
                >
                    Правила використання
                </FooterButton>

                <FooterButton 
                    href='/'
                >
                    Конфіденційність
                </FooterButton>

                <FooterButton 
                    href='/'
                >
                    Безпека
                </FooterButton>
            </div>
        </footer>
    );
};

export default Footer;