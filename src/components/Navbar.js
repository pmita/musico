import React from 'react'
import './Navbar.css'
// ROUTING
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <h2 className='navbar-left'>
                <Link to='/'>Musico-co</Link>
            </h2>
            <ul className='navbar-right'>
                <li>
                    <Link 
                        className='btn' 
                        to='/login'
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link 
                        className='btn' 
                        to='/signup'
                    >
                        Signup
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;