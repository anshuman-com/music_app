import React from 'react';

const Header = () => {
  return (
    <div className="p-6">
      {/* Top Section with Headings and Search Bar */}
      <div className="flex items-center w-full">
        {/* Headings */}
        <h2 className="text-white text-xl font-bold">Music</h2>
        <h2 className="text-white text-xl font-bold ml-4">Podcast</h2> {/* Added ml-4 for spacing */}
        <h2 className="text-white text-xl font-bold ml-4">Live</h2>
        <h2 className="text-white text-xl font-bold ml-4">Radio</h2>
        
        {/* Search Bar (with increased gap) */}
        <div className="flex items-center ml-12"> {/* Set ml-12 to give a 50px equivalent margin */}
          <input
            type="text"
            placeholder="Anshuman Shukla"
            className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Artist Information and Image Section */}
      <div className="flex items-center justify-start p-8 rounded-md space-x-6 ml-56 mt-18">
        {/* Artist Information (Left) */}
        <div className="artist-info-container text-left">
          <h1 className="text-white text-4xl font-bold mb-2 hover:text-yellow-400 transition-colors duration-300">
            Michael Jackson
          </h1>
          <p className="text-white text-sm font-medium">
            Active Monthly Listeners: 27,852,501
          </p>
        </div>

        {/* Artist Image (Right) */}
        <div className="artist-image-container">
          <img
            src="/artist.jpg" // Ensure correct path or use an imported image if necessary
            alt="Artist"
            className="rounded-md w-80 h-80 object-cover shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
