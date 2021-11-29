import React from 'react'
import './Navbar.css'
// ROUTING
import { Link } from 'react-router-dom';
// HOOKS
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    //STATE
    const { user } = useAuthContext()
    const { signout, isPending } = useLogout()

    return(
        <nav className='navbar'>
            <h2 className='navbar-left'>
                <Link to='/'>Musico-co</Link>
            </h2>
            <ul className='navbar-right'>
                {user && (
                    <li>
                        <h4>Hey, {user.displayName}</h4>
                    </li>
                )}

                <li>
                    <Link
                        to='/create'
                        className='btn'
                    >
                        + Add Song
                    </Link>
                </li>

                {!user && (
                    <>
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
                    </>
                )}

                {user && (
                    <li>
                        {!isPending && <button className='btn' onClick={signout}>Sign Out</button>}
                        {isPending && <button className='btn' disabled>Loggin Out...</button>}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;