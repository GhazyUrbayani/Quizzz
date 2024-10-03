import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('username', username);  // Simpan nama pengguna di localStorage
      navigate('/quiz');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Start Quiz</button>
    </div>
  );
};

export default Login;
