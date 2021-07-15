import { useState, useContext } from 'react';
import { BtnContext } from '../context/BtnContext';
import btnStyles from '../styles/Btns.module.css';

const Button = ({ txt, correct }) => {
  const [className, setclassName] = useState(false);
  const {
    active,
    setActive,
    setCurrentQuestionIndex,
    visibility,
    setVisibility,
    setScore,
  } = useContext(BtnContext);

  const selectAnswer = (e) => {
    if (e.target.dataset.ans) {
      setclassName(btnStyles.correct);
      setScore((currScore) => currScore + 1);
    } else {
      setclassName(btnStyles.wrong);
    }

    setActive(!active);
    setCurrentQuestionIndex((currQuestionIndex) => currQuestionIndex + 1);
    setVisibility(!visibility);
  };

  return (
    <button
      className={className ? className : btnStyles.nic}
      data-ans={correct}
      onClick={(e) => selectAnswer(e)}
    >
      {txt}
    </button>
  );
};

export default Button;
