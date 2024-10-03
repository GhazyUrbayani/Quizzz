import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { correctAnswers, wrongAnswers, answeredQuestions, total } = location.state;
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Quiz Completed</h1>
      <div className="result">
        <p>Correct Answers: {correctAnswers}</p>
        <p>Wrong Answers: {wrongAnswers}</p>
        <p>Questions Answered: {answeredQuestions} out of {total}</p>
      </div>
      <button onClick={() => navigate('/')}>Restart</button>
    </div>
  );
};

export default Result;
