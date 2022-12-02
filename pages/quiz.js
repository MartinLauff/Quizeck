import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { BtnContext } from '../context/BtnContext';

import questions from '../components/Questions';
import Footer from '../components/Footer';
import Question from '../components/Question';
import quizStyles from '../styles/Quiz.module.css';

const quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const [question, setQuestion] = useState({});
  const [showUp, setShowUp] = useState(false);

  const {
    active,
    setActive,
    setOrder,
    order,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    visibility,
    setVisibility,
    score,
    setScore,
  } = useContext(BtnContext);

  useEffect(() => {
    startGame();
  }, []);

  /////////////// Timer //////////////
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active);
      setVisibility(!visibility);
      setCurrentQuestionIndex((currQuestionIndex) => currQuestionIndex + 1);
      console.log(currentQuestionIndex + ' timer');
    }, 10000);

    return () => {
      if (active) {
        clearTimeout(timer);
      }
    };
  }, [order]);

  const startGame = () => {
    setShuffledQuestions(questions.sort(() => Math.random() - 0.5));
    setScore(0);
    setNextQuestion();
  };

  const setNextQuestion = () => {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  };

  const showQuestion = (question) => {
    if (currentQuestionIndex + 1 > shuffledQuestions.length) {
      setShowUp(!showUp);
      setCurrentQuestionIndex(0);
      setOrder(1);
    }
    setQuestion(question);
  };

  const clickNext = () => {
    setActive(!active);
    setOrder((currOrder) => currOrder + 1);
    setVisibility(!visibility);

    setNextQuestion();
  };

  const restart = () => {
    startGame();
    setShowUp(!showUp);
  };

  return (
    <div>
      <header>
        <div className={quizStyles.divBg}>
          <Link href='/'>
            <a>
              <h1>QUIZECK</h1>
            </a>
          </Link>
        </div>
        <div className={quizStyles.barDiv}>
          <div
            className={`${quizStyles.bar} ${
              !active && !showUp ? quizStyles.animation : ''
            }
             `}
          ></div>
        </div>
        <div
          className={`${quizStyles.endScreen} ${showUp ? '' : quizStyles.hide}`}
        >
          <h2>Score: {score}</h2>
          <button onClick={restart}>Start again</button>
        </div>
        <Question questionCount={questions.length} currentQuestion={question} />
        <button
          onClick={clickNext}
          className={`${quizStyles.modal} ${active ? '' : quizStyles.hide}`}
          type='button'
        >
          Next
        </button>
      </header>
      <Footer />
    </div>
  );
};

export default quiz;
