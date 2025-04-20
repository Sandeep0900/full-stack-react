import React from 'react';
import './All.css';

const Component4 = ({ gitHubData, loading }) => {
  const user = gitHubData?.data?.[0]; // GitHub data is nested

  return (
    <div className="box">
      <h3>GitHub Data</h3>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : user ? (
        <div>
      <h2>GitHub Profile</h2>
      <p><strong>Name:</strong> {gitHubData.name}</p>
      <p><strong>Username:</strong> {gitHubData.username}</p>
      <p><strong>Followers:</strong> {gitHubData.followers}</p>
      <p><strong>Bio:</strong> {gitHubData.bio}</p>
      <a href={gitHubData.user} target="_blank" rel="noreferrer">GitHub Profile</a>
    </div>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default Component4;
