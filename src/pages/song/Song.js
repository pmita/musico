import React from 'react'
import './Song.css'
// ROUTER
import { useParams, useNavigate } from 'react-router';
// HOOKS 
import { useDocument } from '../../hooks/useDocument';

const Song = () => {
    // STATE
    const { id } = useParams()
    const { document : song, isPending, error } = useDocument('songs', id)
    const navigate = useNavigate()

    // FUNCTIONS
    const renderContent = () => {
        return(
            <>
                <div className='song-page-left'>
                    <img src={song.cover} alt='album cover' />
                </div>
                <div className='song-page-right'>
                    <h2>{song.title}</h2>
                    <h4>{song.artist}</h4>
                    <button 
                        className='btn' 
                        onClick={() => navigate('/')}
                    >
                        Go Back
                    </button>
                </div>
            </>
        )
    }
    return(
        <div className='song-page'>
            {isPending && <p>Song is Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {song && renderContent()}
        </div>
    );
}

export default Song;