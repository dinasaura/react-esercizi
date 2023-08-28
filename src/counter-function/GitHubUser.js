import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Errore nel recupero dei dati:', error));
  }, [username]);

  if (!userData) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Nome utente: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
    </div>
  );
}

export default GithubUser;
