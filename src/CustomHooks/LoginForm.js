import React from 'react';
import useFormInput from './UseFormInput'; 

function LoginForm() {
  const usernameInput = useFormInput('');
  const passwordInput = useFormInput('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Username:', usernameInput.value);
    console.log('Password:', passwordInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" {...usernameInput} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...passwordInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
