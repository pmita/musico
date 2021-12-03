import React, { useState } from 'react'
import './Login.css';
// HOOKS
import { useLogin } from '../../hooks/useLogin';
// ROUTER
import { useNavigate } from 'react-router';

const Login = () => {
    // STATE
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')
    const { login, isPending, error } = useLogin()
    const navigate = useNavigate()

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, passowrd)
        navigate('/')
    }

    return(
        <div className='signin-page'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email: </span>
                    <input
                        required
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password: </span>
                    <input
                        required
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={passowrd}
                    />
                </label>
                {!isPending && <button className='btn'>Sign In</button>}
                {isPending && <button className='btn' disabled>Loading...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
}

export default Login;