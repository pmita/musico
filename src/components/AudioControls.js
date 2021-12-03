import React from 'react'
import './AudioControls.css'
// ASSETS
import playButton from '../assets/images/play.svg'
import repeatButton from '../assets/images/replay.svg'
import pauseButton from '../assets/images/pause.svg'
// ROUTER
import { useNavigate } from 'react-router'

const AudioControls = ({ audioRef, keepPlaying, setKeepPlaying, isPlaying, setIsPlaying }) => {
    // STATE    
    const navigate = useNavigate()
    
    // EVENTS
    const handlePlay = () => {
        if(isPlaying){
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    return(
        <div className='controls-container'>
            <button className={isPlaying ? 'btn-secondary':'btn'} onClick={handlePlay}>
                {isPlaying 
                    ?<img src={pauseButton} alt='pause button' /> 
                    :<img src={playButton} alt='play button' />
                }
            </button>
            <button className={keepPlaying ? 'btn-secondary' :'btn'} onClick={() => setKeepPlaying(!keepPlaying)}>
                <img src={repeatButton} alt='repeat button' />
            </button>
            <button 
                className='btn' 
                onClick={() => navigate('/')}
            >
                Go Back
            </button>
        </div>
    )
}

export default AudioControls