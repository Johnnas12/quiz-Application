// ResultContext.js
import { createContext, useState } from 'react';

 const ResultContext = createContext();

 export const UseResultContext = () => {

    return ResultContext;
 }

export const ResultProvider = ({ children }) => {
  const [passed, setPassed] = useState(false);

  const setPass = (value) => {
    setPassed((prevState) => ({
      ...prevState,
      passed: value,
    }));
  };

  return (
    <ResultContext.Provider value={{ passed, setPass }}>
      {children}
    </ResultContext.Provider>
  );
};


