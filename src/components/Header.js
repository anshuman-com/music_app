import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the blue check mark icon

const Header = () => {
  return (
    <div className="p-2 overflow-visible">
      {/* Top Section with Headings and Search Bar */}
      <div className="flex items-center w-full">
        {/* Headings */}
        <h2 className="text-white text-xl font-bold ml-10">Music</h2>
        <h2 className="text-white text-xl font-bold ml-8">Podcast</h2> {/* Increased margin-left */}
        <h2 className="text-white text-xl font-bold ml-8">Live</h2> {/* Increased margin-left */}
        <h2 className="text-white text-xl font-bold ml-8">Radio</h2> {/* Increased margin-left */}
        
        {/* Search Bar (with increased gap) */}
        <div className="flex items-center ml-64"> {/* Increased margin-left */}
          <input
            type="text"
            placeholder="Anshuman Shukla"
            className="bg-transparent border-2 border-grey text-white py-2 px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Artist Information and Image Section with Background */}
      <div
        className="relative p-8 mt-18 rounded-lg overflow-visible"
        style={{
          position: 'relative', // Set to relative for proper child positioning
          width: '750px',
          height: '250px',  // Increase height to allow more space for the image and text
          left: '180px',
          top: '140px',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '40px',
        }}
      >
        <div className="flex items-center justify-start space-x-6">
          {/* Artist Information (Left) */}
          <div className="artist-info-container text-left">
            {/* Verified Artist and Blue Tick */}
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-blue-500 mr-2" size={20} />
              <p className="text-blue-500 text-sm font-medium">Verified Artist</p>
            </div>

            {/* Artist Name */}
            <h1 className="text-white text-2xl font-bold mb-2 hover:text-yellow-400 transition-colors duration-300">
              Michael Jackson
            </h1>
            <p className="text-white text-sm font-medium">
              Active Monthly Listeners: 27,852,501
            </p>
          </div>

          {/* Artist Image (Right) */}
          <div
            className="artist-image-container"
            style={{
              position: 'absolute',
              width: '300px', // Set width that fits well within the section
              height: '400px', // Adjust height proportionally
              left: '340px',  // Adjust horizontal position so the image is better centered
              top: '-180px',  // Move image upwards to make it extend out of the section
              background: 'url("/artist.png")', // Ensure the image path is correct
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
