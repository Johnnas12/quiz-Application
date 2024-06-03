import React, { useState } from 'react';
import QuestionCard from './views/QuestionCard';
import ScoreBoard from './views/ScoreBoard';
import QuizControls from './views/QuizControls';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import QuizManager from './views/QuizManager';
import ResultPage from './views/result';
import { ResultProvider } from './context';
import LandingPage from './views/landingpage';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Add your quiz logic here

  return (
    <ResultProvider>
    <BrowserRouter >
      <Routes>
      <Route path="/" element= {<LandingPage />} />
      <Route path="/quiz" element={ <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <QuestionCard />
      {/* <ScoreBoard score={score} questions = {questions} /> */}
      {/* <QuizControls /> */}
      </div>
    } />

        <Route path="/register" element={<QuizManager />} />


        <Route path="/result" element={<ResultPage />} />
       
      </Routes>
    
    </BrowserRouter>
</ResultProvider>
  );
};

export default QuizApp;