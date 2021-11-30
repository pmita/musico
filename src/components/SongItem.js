import React from "react";
import './SongItem.css';
// ROUTER
import { Link } from "react-router-dom";

const SongItem = ({ song }) => {
    return(
        <div className='song-item'>
            <Link to={`/song/${song.id}`}>
                <img src={song.cover} alt='song album cover' />
            </Link>
            <div className='song-item-details'>
                <h4>{song.title}</h4>
                <h5>{song.artist}</h5>
            </div>
        </div>
    )
}

export default SongItem;