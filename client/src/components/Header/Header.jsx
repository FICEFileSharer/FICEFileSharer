import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import SearchBar from '../searchInput/SearchBar/SearchBar';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <nav 
                className='navbar navbar-expand-lg fixed-top bg-opacity-100 bg-navbar' 
                data-bs-theme='dark'
            >
                <div className='container-fluid'>
                    <a 
                        className='navbar-brand' 
                        href='/'
                    >
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

                    <div 
                        className='collapse navbar-collapse' 
                        id='navbarMenu'
                    >
                        <ul className='navbar-nav nav-underline me-auto'>
                            <a 
                                className='nav-form' 
                                href='/'
                            >
                                <li className='nav-item mobile-pb'>
                                    <div className={`d-inline-flex nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                        <i className='bi bi-house'></i>

                                        <div className='ps-2'>
                                            Головна
                                        </div>
                                    </div>
                                </li>
                            </a>
                        </ul>

                        <SearchBar> </SearchBar>

                        <ProfileButton 
                            href='/login' 
                            condition='/'
                        >
                            Логін
                        </ProfileButton>

                        <ProfileButton 
                            href='/' 
                            condition='/login'
                        >
                            Профіль
                        </ProfileButton>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;