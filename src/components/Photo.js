import React, { useState } from 'react';
import './All.css';

const Photo = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="photo-container">
      <div className="photo">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <span>Photo</span>
        )}
      </div>
      <label className="upload-button">
        Upload Photo
        <input type="file" accept="image/*" onChange={handleImageChange} hidden />
      </label>
    </div>
  );
};

export default Photo;