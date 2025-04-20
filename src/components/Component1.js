import React, { useState } from 'react';
import axios from 'axios';
import './All.css';

const Component1 = ({ setLinkedInData, setGitHubData, setLoading }) => {
  const [platform, setPlatform] = useState('');
  const [username, setUsername] = useState('');

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    setUsername('');
  };

  const handleFetch = async () => {
    if (!username) return alert('Please enter a username');
    setLoading(true); // ✅ Start loading

    if (platform === 'linkedin') {
      try {
        const response = await axios.get('https://linkedin-data-api.p.rapidapi.com/', {
          params: { username },
          headers: {
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
            'x-rapidapi-key': '1c1945f03emsh1a3b86f3327e4dep161688jsnd0e6c5d24c22',
          },
        });
        console.log('LinkedIn Response:', response.data); // 
        setLinkedInData(response.data);
      } catch (error) {
        console.error('LinkedIn API error:', error);
        alert('Failed to fetch LinkedIn data. Check console.');
      }
    }

    if (platform === 'github') {
      try {
        const response = await axios.get(
          `https://github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com/profiles`,
          {
            params: { profileUrl: `https://github.com/${username}` },
            headers: {
              'x-rapidapi-host': 'github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com',
              'x-rapidapi-key': '1c1945f03emsh1a3b86f3327e4dep161688jsnd0e6c5d24c22',
            },
          }
        );
        console.log('GitHub Response:', response.data); 
        setGitHubData(response.data);
      } catch (error) {
        console.error('GitHub API error:', error);
        alert('Failed to fetch GitHub data. Check console.');
      }
    }

    setLoading(false); // ✅ End loading
  };

  return (
    <div className="box">
      <h2>Select Platform</h2>
      <select value={platform} onChange={handlePlatformChange}>
        <option value="">-- Choose --</option>
        <option value="linkedin">LinkedIn</option>
        <option value="github">GitHub</option>
      </select>

      {platform && (
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder={`Enter ${platform} username`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleFetch}>Fetch Data</button>
        </div>
      )}
    </div>
  );
};

export default Component1;
