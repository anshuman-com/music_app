// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SongList from './components/SongList';
import PlayerControls from './components/PlayerControls';

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [songs, setSongs] = useState([]); // Assuming you load songs here

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  const handleSongEnd = () => {
    const currentIndex = songs.findIndex(song => song === selectedSong);
    const nextSong = songs[currentIndex + 1] || songs[0]; // Loop back to the start
    setSelectedSong(nextSong);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <SongList songs={songs} onSelectSong={handleSelectSong} setSongs={setSongs} />
        {selectedSong && (
          <PlayerControls selectedSong={selectedSong} onSongEnd={handleSongEnd} />
        )}
      </div>
    </div>
  );
};

export default App;



