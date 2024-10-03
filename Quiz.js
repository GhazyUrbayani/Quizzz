import React, { useEffect, useState } from 'react';
import { fetchQuestions } from './api.js';
import { useTimer } from './useTimer.js';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const username = localStorage.getItem('username');  // Ambil nama pengguna dari localStorage
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const savedQuestion = localStorage.getItem(`${username}_currentQuestion`);
    return savedQuestion ? parseInt(savedQuestion) : 0;
  });
  const [correctAnswers, setCorrectAnswers] = useState(() => {
    const savedCorrect = localStorage.getItem(`${username}_correctAnswers`);
    return savedCorrect ? parseInt(savedCorrect) : 0;
  });
  const [wrongAnswers, setWrongAnswers] = useState(() => {
    const savedWrong = localStorage.getItem(`${username}_wrongAnswers`);
    return savedWrong ? parseInt(savedWrong) : 0;
  });
  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const savedAnswered = localStorage.getItem(`${username}_answeredQuestions`);
    return savedAnswered ? parseInt(savedAnswered) : 0;
  });
  const navigate = useNavigate();

  const timeLeft = useTimer(60, () => navigate('/result', { state: { correctAnswers, wrongAnswers, answeredQuestions, total: questions.length } }));

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  // Simpan progress kuis berdasarkan nama pengguna ke localStorage
  useEffect(() => {
    localStorage.setItem(`${username}_currentQuestion`, currentQuestion);
    localStorage.setItem(`${username}_correctAnswers`, correctAnswers);
    localStorage.setItem(`${username}_wrongAnswers`, wrongAnswers);
    localStorage.setItem(`${username}_answeredQuestions`, answeredQuestions);
  }, [currentQuestion, correctAnswers, wrongAnswers, answeredQuestions, username]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Hapus progress setelah kuis selesai
      localStorage.removeItem(`${username}_currentQuestion`);
      localStorage.removeItem(`${username}_correctAnswers`);
      localStorage.removeItem(`${username}_wrongAnswers`);
      localStorage.removeItem(`${username}_answeredQuestions`);
      navigate('/result', { state: { correctAnswers, wrongAnswers, answeredQuestions: answeredQuestions + 1, total: questions.length } });
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Quiz</h1>
      <div className="timer">Time left: {timeLeft} seconds</div>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer).map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Question {currentQuestion + 1} of {questions.length}</p>
    </div>
  );
};

export default Quiz;
