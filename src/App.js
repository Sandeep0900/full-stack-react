import React from 'react';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
// import SearchBar from './components/SearchBar'
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="row">
          <Component1 />
          <Component2 />
        </div>
        <div className="row">
          <Component3 />
          <Component4 />
        </div>
      </div>
    </div>
  );
};

export default App;
