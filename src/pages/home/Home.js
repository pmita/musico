import React from 'react'
import './Home.css'
// COMPONENTS
import SongsList from '../../components/SongsList';

const Home = () => {
    return(
        <div className='home-page'>
            <h1>Our picks for now</h1>
            <SongsList />
        </div>
    );
}

export default Home;