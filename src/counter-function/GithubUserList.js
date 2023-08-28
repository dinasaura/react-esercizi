import React, { useState } from 'react';
import GithubUser from './GitHubUser';

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const usernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const addUsername = () => {
    setUsernames([...usernames, newUsername]);
    setNewUsername('');
  };

  return (
    <div>
      <h1>Github User List</h1>
      <div>
        <input
          type="text"
          value={newUsername}
          onChange={usernameChange}
          placeholder="Enter GitHub username"
        />
        <button onClick={addUsername}>Add Username</button>
      </div>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}

export default GithubUserList;
