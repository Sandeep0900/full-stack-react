import React from 'react';
import './All.css';

const Component4 = ({ gitHubData, loading }) => {
  const user = gitHubData?.data ?? gitHubData; // ✅ Now correctly accessing the object

  return (
    <div className="box">
      <h3>GitHub Data</h3>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : user ? (
        <div>
          <h2>GitHub Profile</h2>
          {user.avatar_url && (
            <img
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
          )}
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <a href={user.user} target="_blank" rel="noreferrer">GitHub Profile</a>
        </div>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default Component4;
