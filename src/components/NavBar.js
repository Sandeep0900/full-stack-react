import React from 'react';
import { FaHome, FaTachometerAlt, FaCog, FaUser, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
// import SearchBar from './SearchBar';// Import SearchBar
import './All.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-item">
        <FaHome className="nav-icon" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FaTachometerAlt className="nav-icon" />
        <span>Dashboard</span>
      </div>
      <div className="nav-item">
        <FaUser className="nav-icon" />
        <span>Profile</span>
      </div>
      <div className="nav-item">
        <FaEnvelope className="nav-icon" />
        <span>Messages</span>
      </div>
      <div className="nav-item">
        <FaBell className="nav-icon" />
        <span>Notifications</span>
      </div>
      <div className="nav-item">
        <FaCog className="nav-icon" />
        <span>Settings</span>
      </div>
      <div className="nav-item">
        <FaSignOutAlt className="nav-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default NavBar;