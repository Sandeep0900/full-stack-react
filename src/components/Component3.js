import React from 'react';
import './All.css';

const Component3 = ({ linkedInData, loading }) => {
  return (
    <div className="box">
      <h3>LinkedIn Data</h3>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : linkedInData ? (
        <div className="profile-container">
          <img src={linkedInData.profilePicture || "https://via.placeholder.com/150"} alt="Profile" className="profile-image" />

          <div className="profile-info">
            <h4>{linkedInData.username}</h4>
            <p>{linkedInData.headline}</p>
            <p><strong>Location:</strong> {linkedInData.geo.city}</p>
            <p><strong>Country Code:</strong> {linkedInData.geo.countryCode}</p>
          </div>
          <img src={linkedInData.backgroundImage.url || "https://via.placeholder.com/150"} alt="Profile" className="profile-image" />
        </div>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default Component3;
