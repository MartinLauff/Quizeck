import Button from './Button';

const ButtonsList = ({ answers }) => {
  if (!answers) {
    return <div>Loading btns...</div>;
  }

  const renderBtns = () => {
    return answers.map((answer, index) => {
      return (
        <Button
          txt={answer.text}
          correct={answer.correct ? answer.correct : ''}
          key={index}
        />
      );
    });
  };

  return <>{renderBtns()}</>;
};

export default ButtonsList;
