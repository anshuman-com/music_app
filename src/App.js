import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';

function App() {
    return (
        <div className="app-container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="main-container">
                <Header />
            </div>
            {/* New container for bottom components */}
            <div className="bottom-container">
                <div className="song-container">
                    <SongList />
                </div>
                <div className="player-controls-container">
                    <MusicPlayer />
                </div>
            </div>
        </div>
    );
}

export default App;
