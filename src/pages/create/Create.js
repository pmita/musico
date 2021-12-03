import React, { useState } from 'react'
import './Create.css'
// HOOKS
import { useFirestore } from '../../hooks/useFirestore'
// ROUTER
import { useNavigate } from 'react-router'

const Create = () => {
    // STATE
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [cover, setCover] = useState('')
    const [song_path, setSong_path] = useState('')
    const { addDocument } = useFirestore('songs') 
    const navigate = useNavigate()

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ title, artist, cover, song_path })
        navigate('/')
    }

    return(
        <div className='create-page'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Song Title: </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Artist : </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                    />
                </label>
                <label>
                    <span>Album Cover: </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setCover(e.target.value)}
                        value={cover}
                    />
                </label>
                <label>
                    <span>Song URL: </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setSong_path(e.target.value)}
                        value={song_path}
                    />
                </label>
                <button className='btn'>Add Song</button>
            </form>
        </div>
    );
}

export default Create;