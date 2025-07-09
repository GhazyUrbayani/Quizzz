import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('username', username);
      navigate('/quiz');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Start Quiz</button>
      <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
        *Nama harus diingat untuk bisa melanjutkan Quiz bila meninggalkan/keluar/koneksi putus/tertutup di tengah pengerjaan.
      </p>
    </div>
  );
};

export default Login;
