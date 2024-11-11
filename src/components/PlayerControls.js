import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PlayerControls = () => {
    // Sample songs list
    const initialSongs = [
        { id: '1', title: 'Billie Jean', src: 'https://www.example.com/audio/billie-jean.mp3' },
        { id: '2', title: 'Beat It', src: 'https://www.example.com/audio/beat-it.mp3' },
        { id: '3', title: 'Smooth Criminal', src: 'https://www.example.com/audio/smooth-criminal.mp3' },
        { id: '4', title: "Don't Stop 'Til You Get Enough", src: 'https://www.example.com/audio/dont-stop.mp3' },
        { id: '5', title: 'Rock With You', src: 'https://www.example.com/audio/rock-with-you.mp3' },
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

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(songs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setSongs(items);
        if (result.source.index === currentSongIndex) {
            setCurrentSongIndex(result.destination.index);
        } else if (result.source.index < currentSongIndex && result.destination.index >= currentSongIndex) {
            setCurrentSongIndex(currentSongIndex - 1);
        } else if (result.source.index > currentSongIndex && result.destination.index <= currentSongIndex) {
            setCurrentSongIndex(currentSongIndex + 1);
        }
    };

    return (
        <div className="player-container">
            <h3 className="title">Now Playing</h3>
            <div className="now-playing">
                <p className="song-title">{songs[currentSongIndex].title}</p>
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

            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="songs">
                    {(provided) => (
                        <ul className="songs-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {songs.map(({ id, title }, index) => (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                                        >
                                            {title}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default PlayerControls;
