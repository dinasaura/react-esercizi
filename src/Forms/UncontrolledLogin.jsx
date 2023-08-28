import React, { useRef, useEffect } from 'react';

function UncontrolledLogin({ onLogin }) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

  const gestioneLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username !== '' && password !== '') {
      onLogin({ username, password });
    }
  };

  const gestioneReset = () => {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        id="username"
        placeholder="Username"
        ref={usernameRef}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        ref={passwordRef}
      />
      <button onClick={gestioneLogin}>
        Login
      </button>
      <button onClick={gestioneReset}>
        Reset
      </button>
    </div>
  );
}

export default UncontrolledLogin;
