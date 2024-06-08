import React, { useState } from 'react';

function ForgetPass() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const item = { email, password };
      const response = await fetch('http://localhost:7373/log/forgetpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(item),
      });

      const data = await response.json();

      if (response.ok) {
       // setStatusMessage(data); // Assuming the message is returned from the server
       setStatusMessage(`Password is set: ${data.message}`);

      } else {
        setStatusMessage(`Password not set: ${data.message}`);
      }
    } catch (error) {
      setStatusMessage(`Error during password reset: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Set Password</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default ForgetPass;
