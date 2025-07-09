import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.js';
import Quiz from './Quiz.js';
import Result from './Result.js';
import './app.css';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
