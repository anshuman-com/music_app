import { px } from 'framer-motion';
import React from 'react';
import { FaMusic } from 'react-icons/fa'; // Importing music icon

const SongList = () => {
    const songs = [
        { id: 1, title: 'Billie Jean', plays: '1,040,811,084', duration: '4:53', album: 'Thriller 25' },
        { id: 2, title: 'Beat It', plays: '643,786,045', duration: '4:18', album: 'Thriller 25' },
        { id: 3, title: 'Smooth Criminal', plays: '407,234,004', duration: '4:17', album: 'Bad 25' },
        { id: 4, title: "Don't Stop 'Til You Get Enough", plays: '316,391,952', duration: '6:05', album: 'Off The Wall' },
        { id: 5, title: 'Rock With You', plays: '268,187,218', duration: '3:38', album: 'Off The Wall' },
    ];

    return (
        <div
            className="song-list-container p-6 rounded-lg w-full max-w-screen-lg mx-auto mt-10"
            style={{ left: '1000px' }} // Adjusted left to move the section further to the right
        >
            <h3 className="text-2xl font-bold mb-3 text-white">Popular</h3> {/* Reduced margin */}
            <table className="w-full text-base text-white">
                <thead>
                    <tr className="text-left">
                        <th className="py-2 px-4">#</th> {/* Reduced padding */}
                        <th className="py-2 px-4">Title</th>
                        <th className="py-2 px-4">Playing</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Album</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr 
                            key={song.id} 
                            className="hover:bg-[#520100] cursor-pointer transition-colors duration-300"
                        >
                            <td className="py-2 px-4">{index + 1}</td> {/* Reduced padding */}
                            <td className="flex items-center py-2 px-4">
                                <FaMusic className="text-xl mr-3" /> {/* Small song/music icon */}
                                {song.title}
                            </td>
                            <td className="py-2 px-4">{song.plays}</td>
                            <td className="py-2 px-4">{song.duration}</td>
                            <td className="py-2 px-4">{song.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
