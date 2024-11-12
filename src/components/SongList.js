import React, { useState } from 'react';
import { FaMusic, FaPlay, FaPause } from 'react-icons/fa';
import { Howl } from 'howler';
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SongList = ({ onSelectSong }) => {
  const initialSongs = [
    { id: '1', title: 'Billie Jean', plays: '1,040,811,084', duration: '4:53', album: 'Thriller 25', fileUrl: '/songs/1.m4a' },
    { id: '2', title: 'Beat It', plays: '643,786,045', duration: '4:18', album: 'Thriller 25', fileUrl: '/audio/beat_it.mp3' },
    { id: '3', title: 'Smooth Criminal', plays: '407,234,004', duration: '4:17', album: 'Bad 25', fileUrl: '/audio/smooth_criminal.mp3' },
    { id: '4', title: "Don't Stop 'Til You Get Enough", plays: '316,391,952', duration: '6:05', album: 'Off The Wall', fileUrl: '/audio/dont_stop.mp3' },
    { id: '5', title: 'Rock With You', plays: '268,187,218', duration: '3:38', album: 'Off The Wall', fileUrl: '/audio/rock_with_you.mp3' },
  ];

  const [songs, setSongs] = useState(initialSongs);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [currentSound, setCurrentSound] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handlePlayPause = (song) => {
    if (currentPlayingId === song.id) {
      if (currentSound) {
        currentSound.pause();
        setCurrentPlayingId(null);
      }
    } else {
      if (currentSound) {
        currentSound.stop();
      }
      const sound = new Howl({ src: [song.fileUrl], html5: true });
      sound.play();
      setCurrentSound(sound);
      setCurrentPlayingId(song.id);
    }

    // Trigger the parent handler to sync the selected song in PlayerControls
    onSelectSong(song);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = songs.findIndex((song) => song.id === active.id);
      const newIndex = songs.findIndex((song) => song.id === over.id);
      const newOrder = arrayMove(songs, oldIndex, newIndex);
      setSongs(newOrder);
    }
  };

  const SortableItem = ({ song, index }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: song.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <tr
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="hover:bg-[#520100] cursor-pointer transition-colors duration-300"
        onClick={() => handlePlayPause(song)}
      >
        <td className="py-2 px-4">{index + 1}</td>
        <td className="flex items-center py-2 px-4">
          <FaMusic className="text-xl mr-3" />
          {song.title}
        </td>
        <td className="py-2 px-4">{song.plays}</td>
        <td className="py-2 px-4">{song.duration}</td>
        <td className="py-2 px-4">{song.album}</td>
        <td className="py-2 px-4">
          <button onClick={() => handlePlayPause(song)} className="focus:outline-none">
            {currentPlayingId === song.id ? <FaPause /> : <FaPlay />}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="song-list-container p-6 rounded-lg w-full max-w-screen-lg mx-auto mt-10">
        <h3 className="text-2xl font-bold mb-3 text-white">Popular</h3>
        <table className="w-full text-base text-white">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Plays</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Album</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <SortableContext items={songs} strategy={verticalListSortingStrategy}>
            <tbody>
              {songs.map((song, index) => (
                <SortableItem key={song.id} song={song} index={index} />
              ))}
            </tbody>
          </SortableContext>
        </table>
      </div>
    </DndContext>
  );
};

export default SongList;
