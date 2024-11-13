import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SongList from './components/SongList';
import PlayerControls from './components/PlayerControls';

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [songs, setSongs] = useState([
    { id: '1', title: 'Billie Jean', plays: '1,040,811,084', duration: '4:53', album: 'Thriller 25', fileUrl: '/songs/1.m4a', photo: '/R.jpeg' },
    { id: '2', title: 'Beat It', plays: '643,786,045', duration: '4:18', album: 'Thriller 25', fileUrl: '/songs/2.m4a', photo: '/R.jpeg' },
    { id: '3', title: 'Smooth Criminal', plays: '407,234,004', duration: '4:17', album: 'Bad 25', fileUrl: '/songs/3.m4a', photo: '/R.jpeg' },
    { id: '4', title: "Kill Bill", plays: '316,391,952', duration: '6:05', album: 'Off The Wall', fileUrl: '/songs/2.m4a', photo: './R.jpeg' },
    { id: '5', title: 'Rock With You', plays: '268,187,218', duration: '3:38', album: 'Off The Wall', fileUrl: '/songs/2.m4a', photo: '/R.jpeg' },
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Select a random song on initial load
  useEffect(() => {
    if (songs.length > 0) {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      setSelectedSong(randomSong);
      setIsPlaying(false); // Set to false initially; user can start playback manually
    }
  }, [songs]);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
    setIsPlaying(true); // Start playback when a song is selected
  };

  const handleSongEnd = () => {
    const currentIndex = songs.findIndex(song => song === selectedSong);
    const nextSong = songs[currentIndex + 1] || songs[0]; // Loop back to the start
    setSelectedSong(nextSong);
    setIsPlaying(true); // Continue playback on song end
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <SongList songs={songs} onSelectSong={handleSelectSong} setSongs={setSongs} />
        {/* Render PlayerControls with the selected random song */}
        <PlayerControls
          selectedSong={selectedSong}
          onSongEnd={handleSongEnd}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
};

export default App;
