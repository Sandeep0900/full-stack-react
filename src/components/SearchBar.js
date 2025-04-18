import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import './All.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;