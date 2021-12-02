import React from 'react'
import './AudioControls.css'
// ASSETS
import playButton from '../assets/images/play.svg'
import repeatButton from '../assets/images/replay.svg'
import pauseButton from '../assets/images/pause.svg'

const AudioControls = ({ audioRef, keepPlaying, setKeepPlaying, isPlaying, setIsPlaying }) => {
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
            <button onClick={handlePlay}>
                {isPlaying 
                    ?<img src={pauseButton} alt='pause button' /> 
                    :<img src={playButton} alt='play button' />
                }
            </button>
            <button onClick={() => setKeepPlaying(!keepPlaying)}>
                <img src={repeatButton} alt='repeat button' />
                {keepPlaying && <p>keep playing</p>}
            </button>
        </div>
    )
}

export default AudioControls