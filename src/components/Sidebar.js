import React from 'react';
import { FaHome, FaFire, FaBook, FaCompass, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="brand">
                <h2>DreamMusic</h2>
            </div>
            <nav className="nav-menu">
                <ul className="menu-top">
                    <li className="menu-item">
                        <FaHome className="menu-icon" />
                        <span>Home</span>
                    </li>
                    <li className="menu-item">
                        <FaFire className="menu-icon" />
                        <span>Trends</span>
                    </li>
                    <li className="menu-item">
                        <FaBook className="menu-icon" />
                        <span>Library</span>
                    </li>
                    <li className="menu-item">
                        <FaCompass className="menu-icon" />
                        <span>Discover</span>
                    </li>
                </ul>

                <div className="general-section">
                    <h3>General</h3>
                    <ul className="menu-general">
                        <li className="menu-item">
                            <FaCog className="menu-icon" />
                            <span>Settings</span>
                        </li>
                        <li className="menu-item">
                            <FaSignOutAlt className="menu-icon" />
                            <span>Log Out</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
