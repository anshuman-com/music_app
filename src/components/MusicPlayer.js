import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRedo } from 'react-icons/fa';

const MusicPlayer = () => {
    const initialSongs = [
        { id: '1', title: 'Beat It', artist: 'Michael Jackson', src: 'https://www.example.com/audio/beat-it.mp3' },
        { id: '2', title: 'Billie Jean', artist: 'Michael Jackson', src: 'https://www.example.com/audio/billie-jean.mp3' },
        { id: '3', title: 'Smooth Criminal', artist: 'Michael Jackson', src: 'https://www.example.com/audio/smooth-criminal.mp3' },
    ];

    const [songs, setSongs] = useState(initialSongs);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(songs[currentSongIndex].src));

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(songs[currentSongIndex].src);
        if (isPlaying) {
            audioRef.current.play().catch(() => setIsPlaying(false));
        }
    }, [currentSongIndex]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => setIsPlaying(false));
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    };

    return (
        <div className="music-player-card">
            <header className="now-playing-header">Now Playing</header>
            <div className="album-art">
                <img src="/R.jpeg" alt={songs[currentSongIndex].title} />
            </div>
            <div className="song-details">
                <h3 className="song-title">{songs[currentSongIndex].title}</h3>
                <p className="artist-name">{songs[currentSongIndex].artist}</p>
            </div>
            <div className="progress-container">
                <span className="time-current">2:15</span>
                <input type="range" className="progress-bar" />
                <span className="time-duration">4:18</span>
            </div>
            <div className="controls">
                <button className="control-button"><FaRedo /></button>
                <button className="control-button" onClick={handlePrevious}><FaStepBackward /></button>
                <button className="control-button play-pause" onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="control-button" onClick={handleNext}><FaStepForward /></button>
                <button className="control-button"></button>
            </div>
        </div>
    );
};

export default MusicPlayer;
