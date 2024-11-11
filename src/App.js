import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';

function App() {
    return (
        <div className="app-container overflow-visible">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="main-container">
                <Header />
            </div>
            {/* New container for bottom components */}
            <div className="bottom-container">
                    <SongList />
                <div className="player-controls-container">
                    <MusicPlayer />
                </div>
            </div>
        </div>
    );
}

export default App;
