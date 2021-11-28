import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
    //STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
    }

    return(
        <div className='signup-page'>
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
                        value={password}
                    />
                </label>
                <label>
                    <span>Username: </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;