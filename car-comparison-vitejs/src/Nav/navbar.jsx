import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='navbar-brand'>
                    <img src='/vite.svg' alt='vite logo' width='50' height='50' />
                    GM Car Comparison
                </div>
                <div>
                    <ul className='navbar-nav'>
                        <li>
                            <a to='/'>Home</a>
                        </li>
                        <li>
                            <a to='/contact'>Contact</a>
                        </li>
                        <li>
                            <a to='/about'>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
