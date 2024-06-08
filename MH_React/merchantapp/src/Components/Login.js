
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const item = { username, password };
      const response = await fetch('http://localhost:7373/log/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(item),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage(data.message); // Assuming the message is returned from the server
      } else {
        setStatusMessage(`Login failed: ${data.message}`);
      }
    } catch (error) {
      setStatusMessage(`Error during login: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Login;
