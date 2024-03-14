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
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/test'>Test</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
