import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaRedo } from 'react-icons/fa';
import { Howl } from 'howler';

const PlayerControls = ({ selectedSong, onSongEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const soundRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (selectedSong) {
      soundRef.current = new Howl({
        src: [selectedSong.fileUrl],
        html5: true,
        volume: volume,
        onplay: startProgressUpdate,
        onend: () => {
          onSongEnd();
          setIsPlaying(false);
        },
      });
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
      clearInterval(intervalRef.current);
    };
  }, [selectedSong, volume]);

  const startProgressUpdate = () => {
    intervalRef.current = setInterval(() => {
      if (soundRef.current) {
        setProgress(soundRef.current.seek() || 0);
      }
    }, 1000);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const progressPercentage = (progress / soundRef.current?.duration()) * 100 || 0;

  return (
    <div
    className="player-controls absolute"
    style={{
      width: '350px',
      height: '376px',
      left: '1520px',
      top: '440px',
      borderRadius: '12px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
    <div
      className="player-controls bg-[#420000] text-white rounded-3xl p-6 w-80 mx-auto flex flex-col items-center"
      style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.8)' }}
    >
      {/* Now Playing Text */}
      <h3 className="text-gray-300 text-sm mb-4">Now Playing</h3>
      
      {/* Album Art */}
      <img src={selectedSong?.photo} alt="album art" className="w-full h-40 rounded-lg mb-4 object-cover" />

      {/* Song Title and Artist */}
      <div className="text-center mb-4">
        <h4 className="text-xl font-semibold">{selectedSong?.title}</h4>
        <p className="text-gray-400 text-sm">{selectedSong?.artist || "Unknown Artist"}</p>
      </div>

      {/* Progress Bar and Time */}
      <div className="w-full flex items-center">
        <span className="text-xs text-gray-400">{formatTime(progress)}</span>
        <input
          type="range"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          max={soundRef.current?.duration() || 100}
          className="flex-grow mx-2 accent-[#7f0000] rounded-full"
          style={{ backgroundColor: '#7f0000', height: '5px' }}
        />
        <span className="text-xs text-gray-400">{formatTime(soundRef.current?.duration())}</span>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-between w-full mt-4">
        <button onClick={() => console.log("Repeat")} className="p-3 text-white rounded-full hover:bg-[#7f0000] transition-colors">
          <FaRedo size={20} />
        </button>
        <button onClick={() => console.log("Previous")} className="p-3 text-white rounded-full hover:bg-[#7f0000] transition-colors">
          <FaBackward size={20} />
        </button>
        <button
          onClick={togglePlayPause}
          className="bg-[#7f0000] p-3 rounded-full text-white transition-transform transform hover:scale-105"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <button onClick={() => console.log("Next")} className="p-3 text-white rounded-full hover:bg-[#7f0000] transition-colors">
          <FaForward size={20} />
        </button>
        <button onClick={() => console.log("Shuffle")} className="p-3 text-white rounded-full hover:bg-[#7f0000] transition-colors">
          <FaRedo size={20} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default PlayerControls;
