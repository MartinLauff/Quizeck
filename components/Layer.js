import React, { useContext } from 'react';
import { BtnContext } from '../context/BtnContext';
import btnStyles from '../styles/Btns.module.css';
import quizStyles from '../styles/Quiz.module.css';

const Layer = () => {
  const { visibility } = useContext(BtnContext);
  return (
    <div
      className={`${btnStyles.layer} ${visibility ? '' : quizStyles.hide}`}
    ></div>
  );
};

export default Layer;
