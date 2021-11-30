import React from "react";
import './SongItem.css';

const SongItem = ({ song }) => {
    return(
        <div className='song-item'>
            <img src={song.cover} alt='song album cover' />
            <div className='song-item-details'>
                <h4>{song.title}</h4>
                <h5>{song.artist}</h5>
            </div>
        </div>
    )
}

export default SongItem;