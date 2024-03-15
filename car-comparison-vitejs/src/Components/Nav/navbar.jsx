import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='navbar-brand'>
                    <img src='/gm-logo.png' alt='GM Logo' width='50' height='50' />
                </div>
                <div>
                    <ul className='navbar-nav overpass'>
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
