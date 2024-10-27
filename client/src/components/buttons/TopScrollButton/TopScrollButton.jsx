import './TopScrollButton.css';
import React, { useState, useEffect } from 'react';

const TopScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 50);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`scroll-to-top position-fixed d-flex align-items-center rounded-circle fs-2 ${isVisible ? 'd-inline-block' : 'd-none'}`}
            onClick={scrollToTop}
        >
            <i className='bi bi-arrow-up-circle bottom-mb end-pc bottom-10 end-2 position-fixed'></i>
        </div>
    );
};

export default TopScrollButton;
