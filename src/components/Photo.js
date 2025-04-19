import React, { useEffect, useState } from 'react';
import './All.css';
import { auth, db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const Photo = () => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        const uid = user.uid;
        const photoRef = ref(db, `users/${uid}/photo`);

        onValue(photoRef, (snapshot) => {
          const base64Image = snapshot.val();
          if (base64Image) {
            setImage(base64Image);
          }
        });
      } else {
        setImage(null);
        setEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!email) return null; // Not logged in, don’t show anything

  return (
    <div className="photo-container">
      <div className="photo">
        {image ? (
          <img src={image} alt="User" className="uploaded-image" />
        ) : (
          <span>Photo</span>
        )}
      </div>
      <div className="user-email">{email}</div>
    </div>
  );
};

export default Photo;
