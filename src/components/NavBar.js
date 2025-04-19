import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaCog, FaUser, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './All.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div className="nav-bar">
      <div className="nav-item" onClick={() => navigate('/')}>
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

      {user ? (
        <div className="nav-item" onClick={handleLogout}>
          <FaSignOutAlt className="nav-icon" />
          <span>Logout</span>
        </div>
      ) : (
        <div className="nav-item" onClick={() => navigate('/login')}>
          <FaCog className="nav-icon" />
          <span>Login</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
