import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Howl } from 'howler';

const PlayerControls = ({ selectedSong }) => {
  const [currentSong, setCurrentSong] = useState(selectedSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    if (selectedSong) {
      setCurrentSong(selectedSong);
      if (soundRef.current) {
        soundRef.current.stop();
      }
      soundRef.current = new Howl({ src: [selectedSong.fileUrl], html5: true });
      soundRef.current.play();
      setIsPlaying(true);
    }
  }, [selectedSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to handle playing the next song
  };

  const handlePrevious = () => {
    // Logic to handle playing the previous song
  };

  return (
    <div className="player-container">
      <h3 className="title">Now Playing</h3>
      {currentSong && (
        <div className="now-playing">
          <p className="song-title">{currentSong.title}</p>
          <div className="controls">
            <button onClick={handlePrevious} className="control-button">
              <FaStepBackward />
            </button>
            <button onClick={handlePlayPause} className="control-button">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleNext} className="control-button">
              <FaStepForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerControls;
