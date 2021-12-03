import React, { useState, useEffect, useRef } from 'react'
import './SongPlayer.css'
// COMPONENTS
import AudioControls from './AudioControls'

const SongPlayer = ({ song }) => {
    // STATE
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(true)
    const [keepPlaying, setKeepPlaying] = useState(false)
    const [audioTimestamp, setAudioTimestamp] = useState(null)
    const [audioDuration, setAudioDuration] = useState(null)

    // EVENTS
    const audioClickUpdate = (e) => {
        const newTimestamp = e.target.value
        setAudioTimestamp(newTimestamp)
        audioRef.current.currentTime = newTimestamp
    }

    const handleAudioUpdate = (e) => {
        setAudioTimestamp(e.target.currentTime)
        setAudioDuration(e.target.duration)
    }

    const handleEnd = () => {
        setAudioTimestamp(0)
        audioRef.current.play()
        if(!keepPlaying){
            setIsPlaying(false)
        }
    }

    // useEFFECT
    useEffect(() => {
        audioRef.current.play()
    }, [audioRef])

    return(
        <>
            <input
                type='range'
                min={0}
                max={audioDuration || 0}
                value={audioTimestamp}
                onChange={(e) => audioClickUpdate(e)}
            />
            <AudioControls 
                audioRef={audioRef} 
                keepPlaying={keepPlaying} 
                setKeepPlaying={setKeepPlaying}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <audio
                ref={audioRef}
                src={song.song_path} 
                onTimeUpdate={handleAudioUpdate}
                onEnded={handleEnd}
            >
            </audio>
        </>
    )
}

export default SongPlayer;