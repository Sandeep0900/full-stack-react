import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Login from './components/Login'; // Make sure it's capitalized!
import Signup from './components/Signup';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="row">
                  <Component1 />
                  <Component2 />
                </div>
                <div className="row">
                  <Component3 />
                  <Component4 />
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
