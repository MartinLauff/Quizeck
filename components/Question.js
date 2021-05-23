import { useContext } from 'react';
import { BtnContext } from '../context/BtnContext';
import ButtonsList from './ButtonsList';
import Layer from './Layer';
import questionStyles from '../styles/Question.module.css';

const Question = ({ currentQuestion, questionCount }) => {
  if (!currentQuestion) {
    return <div></div>;
  }

  const { order } = useContext(BtnContext);

  const renderList = () => {
    return (
      <div key={currentQuestion.question}>
        <div className={questionStyles.img}>
          <span className={questionStyles.question}>
            {currentQuestion.question}
          </span>
          <img
            alt='Quiz picture'
            width={300}
            height={130}
            src={currentQuestion.img}
          />
        </div>
        <div className={questionStyles.btns}>
          <Layer />
          <ButtonsList answers={currentQuestion.answers} />
        </div>
        <div
          className={questionStyles.count}
        >{`Question ${order} of ${questionCount}`}</div>
      </div>
    );
  };

  return <>{renderList()}</>;
};

export default Question;
