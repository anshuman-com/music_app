// SongList.js
import React from 'react';

const SongList = () => {
    const songs = [
        { id: 1, title: 'Billie Jean', plays: '1,040,811,084', duration: '4:53', album: 'Thriller 25' },
        { id: 2, title: 'Beat It', plays: '643,786,045', duration: '4:18', album: 'Thriller 25' },
        { id: 3, title: 'Smooth Criminal', plays: '407,234,004', duration: '4:17', album: 'Bad 25' },
        { id: 4, title: "Don't Stop 'Til You Get Enough", plays: '316,391,952', duration: '6:05', album: 'Off The Wall' },
        { id: 5, title: 'Rock With You', plays: '268,187,218', duration: '3:38', album: 'Off The Wall' },
    ];

    return (
        <div className="song-list-container p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Popular</h3>
            <table className="w-full">
                <thead>
                <tr className="text-left">
                    <th className="py-2">#</th>
                    <th>Title</th>
                    <th>Playing</th>
                    <th>Time</th>
                    <th>Album</th>
                </tr>
                </thead>
                <tbody>
                {songs.map((song, index) => (
                    <tr key={song.id} className="hover:bg-gray-700 cursor-pointer">
                        <td className="py-2">{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.plays}</td>
                        <td>{song.duration}</td>
                        <td>{song.album}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
