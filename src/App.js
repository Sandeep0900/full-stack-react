import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [linkedInData, setLinkedInData] = useState(null);
  const [gitHubData, setGitHubData] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Move it here

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
                  <Component1
                    setLinkedInData={setLinkedInData}
                    setGitHubData={setGitHubData}
                    setLoading={setLoading} // ✅ Pass setLoading too
                  />
                </div>
                <div className="row">
                  <Component3 linkedInData={linkedInData} loading={loading} />
                  <Component4 gitHubData={gitHubData} loading={loading} />
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
