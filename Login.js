import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [quizMode, setQuizMode] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      if (quizMode === 'new') {
        localStorage.removeItem(`${username}_currentQuestion`);
        localStorage.removeItem(`${username}_correctAnswers`);
        localStorage.removeItem(`${username}_wrongAnswers`);
        localStorage.removeItem(`${username}_answeredQuestions`);
      }

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
      <h1>Input Nama</h1>

      {!quizMode && (
        <>
          <button onClick={() => setQuizMode('new')}>New Quiz</button>
          <button onClick={() => setQuizMode('continue')}>Continue Quiz</button>
        </>
      )}

      {quizMode && (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Masukkan nama Anda"
          />
          <button onClick={handleLogin}>Start Quiz</button>

          {quizMode === 'new' && (
            <p style={{ fontSize: '12px', color: '#555', marginTop: '10px' }}>
              *Nama harus diingat untuk bisa melanjutkan Quiz bila meninggalkan/keluar/koneksi putus/tertutup di tengah pengerjaan.
            </p>
          )}
          {quizMode === 'continue' && (
            <p style={{ fontSize: '12px', color: '#555', marginTop: '10px' }}>
              Harap masukkan nama pengguna yang sama seperti sebelumnya untuk melanjutkan kuis Anda!
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
