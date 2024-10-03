import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';  // Tambahkan ekstensi .js
import Quiz from './Quiz.js';    // Tambahkan ekstensi .js
import Result from './Result.js';  // Tambahkan ekstensi .js
import './App.css';  // Pastikan file CSS diimpor dengan benar

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
