import { createContext, useState } from 'react';

export const BtnContext = createContext();

export const BtnProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [order, setOrder] = useState(1);
  const [visibility, setVisibility] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <BtnContext.Provider
      value={{
        active,
        setActive,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        order,
        setOrder,
        visibility,
        setVisibility,
        score,
        setScore,
      }}
    >
      {children}
    </BtnContext.Provider>
  );
};
