import React from 'react'
import './SongsList.css'
// HOOOKS
import { useCollection } from '../hooks/useCollection'
import SongItem from './SongItem';

const SongsList = () => {
    //STATE
    const { documents :songs, isPending, error } = useCollection('songs');

    return(
        <div className='songs'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p>Songs Loading...</p>}
            <div className='songs-grid'>
                {songs?.map((song) => (
                    <SongItem 
                        song={song} 
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongsList;