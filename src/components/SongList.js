import React, { useState } from 'react';
import { FaMusic } from 'react-icons/fa';
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
    { id: '1', title: 'Billie Jean', plays: '1,040,811,084', duration: '4:53', album: 'Thriller 25', fileUrl: '/songs/1.m4a', photo: '/R.jpeg' },
    { id: '2', title: 'Beat It', plays: '643,786,045', duration: '4:18', album: 'Thriller 25', fileUrl: '/audio/beat_it.mp3', photo: '/R.jpeg' },
    { id: '3', title: 'Smooth Criminal', plays: '407,234,004', duration: '4:17', album: 'Bad 25', fileUrl: '/audio/smooth_criminal.mp3', photo: '/R.jpeg' },
    { id: '4', title: "Kill Bill", plays: '316,391,952', duration: '6:05', album: 'Off The Wall', fileUrl: '/audio/dont_stop.mp3', photo: './R.jpeg' },
    { id: '5', title: 'Rock With You', plays: '268,187,218', duration: '3:38', album: 'Off The Wall', fileUrl: '/audio/rock_with_you.mp3', photo: '/R.jpeg' },
  ];

  const [songs, setSongs] = useState(initialSongs);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleSongClick = (song) => {
    onSelectSong(song); // Pass the selected song to the parent component
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
        onClick={() => handleSongClick(song)} // Set selected song when clicked
      >
        <td className="py-2 px-4">{index + 1}</td>
        <td className="flex items-center py-2 px-4">
          <img src={song.photo} alt="album art" className="w-10 h-10 mr-3 rounded-md object-cover" />
          {song.title}
        </td>
        <td className="py-2 px-4">{song.plays}</td>
        <td className="py-2 px-4">{song.duration}</td>
        <td className="py-2 px-4">{song.album}</td>
      </tr>
    );
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="song-list-container p-6 rounded-lg w-full max-w-screen-lg ml-24 mx-auto mt-40">
        <h3 className="text-2xl font-bold mb-3 text-white">Popular</h3>
        <table className="w-full text-base text-white">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Plays</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Album</th>
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
