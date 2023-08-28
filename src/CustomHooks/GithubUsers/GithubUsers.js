import React, { useState } from 'react';
import UseGithubUser from './UseGithubUser'; 

function GithubUsers({ initialUsername }) {
  const [username, setUsername] = useState(initialUsername);
  const { userData, loading, error, fetchUser } = UseGithubUser();

  const handleFetch = () => {
    if (username) {
      fetchUser(username);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleFetch}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUsers;
