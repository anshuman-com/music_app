import React from 'react';
import { FaHome, FaFire, FaBook, FaCompass, FaCog, FaSignOutAlt, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar bg-gray-900 min-h-screen p-6 flex flex-col items-center text-white justify-between w-96"> {/* Increased width to w-80 */}
            {/* Top Section: Brand */}
            <div className="flex flex-col items-center w-full">
                {/* Brand with Music Logo */}
                <div className="brand flex items-center mb-6">
                    <FaMusic className="text-4xl mr-3" /> {/* Increased size of music icon */}
                    <h2 className="text-4xl font-semibold">
                        <span className="text-red-500">Dream</span>
                        <span className="text-white">Music</span>
                    </h2>
                </div>

                {/* Menu Heading */}
                <h3 className="text-lg font-semibold mt-6 mb-2 text-left w-full pl-4">Menu</h3> {/* Added margin-top (mt-6) */}

                {/* Navigation Menu */}
                <nav className="nav-menu w-full text-left pl-6">
                    <ul className="menu-top space-y-2">
                        <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                            <FaHome className="menu-icon text-2xl mr-3" />
                            <span className="text-white">Home</span>
                        </li>
                        <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                            <FaFire className="menu-icon text-2xl mr-3" />
                            <span className="text-white">Trends</span>
                        </li>
                        <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                            <FaBook className="menu-icon text-2xl mr-3" />
                            <span className="text-white">Library</span>
                        </li>
                        <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                            <FaCompass className="menu-icon text-2xl mr-3" />
                            <span className="text-white">Discover</span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Bottom Section: General */}
            <div className="general-section w-full text-left mt-auto pl-6">
                <h3 className="text-lg font-semibold mb-2">General</h3>
                <ul className="menu-general space-y-2">
                    <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                        <FaCog className="menu-icon text-2xl mr-3" />
                        <span className="text-white">Settings</span>
                    </li>
                    <li className="menu-item flex items-center text-lg cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                        <FaSignOutAlt className="menu-icon text-2xl mr-3" />
                        <span className="text-white">Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
