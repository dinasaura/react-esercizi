import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // pulsante reset
  const gestioneLogin = () => {
    if (username !== '' && password !== '') {
      onLogin({ username, password });
    }
  };

  const gestioneReset = () => {
    setUsername('');
    setPassword('');
  };

  const isDisabled = username === '' || password === '';

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={gestioneLogin} disabled={isDisabled}>
        Login
      </button>

      {/* reset */}

      <button onClick={gestioneReset}>
        Reset
      </button>
    </div>
  );
}

export default Login;

