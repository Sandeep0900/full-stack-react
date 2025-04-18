import React from 'react';
import Photo from './Photo';
import NavBar from './NavBar';
import SearchBar from './SearchBar'; 
import './All.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>My App</h2>
      </div>
      <div className="sidebar-photo">
        <Photo />
      </div>
      <div className="sidebar-search">
        <SearchBar /> {/* Place SearchBar here */}
      </div>
      <div className="sidebar-nav">
        <NavBar />
      </div>
    </div>
  );
};

export default Sidebar;