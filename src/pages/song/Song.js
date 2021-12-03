import React from 'react'
import './Song.css'
// ROUTER
import { useParams } from 'react-router';
// HOOKS 
import { useDocument } from '../../hooks/useDocument';
import SongPlayer from '../../components/SongPlayer';

const Song = () => {
    // STATE
    const { id } = useParams()
    const { document : song, isPending, error } = useDocument('songs', id)

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
                    <SongPlayer song={song} />
                </div>
            </>
        )
    }
    return(
        <>
            <div className='song-page'>
                {isPending && <p>Song is Loading...</p>}
                {error && <p className='error'>{error}</p>}
                {song && renderContent()}
            </div>
        </>
    );
}

export default Song;