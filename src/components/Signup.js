// src/components/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import './All.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      let base64 = '';
      if (photo) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64 = reader.result;
          set(ref(db, 'users/' + uid), {
            email,
            photo: base64
          });
        };
        reader.readAsDataURL(photo);
      } else {
        set(ref(db, 'users/' + uid), { email });
      }

      navigate('/login');
    } catch (err) {
      setError('Signup failed: ' + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
