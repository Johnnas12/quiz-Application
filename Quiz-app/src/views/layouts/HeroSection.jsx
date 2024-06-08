import React, { useState } from 'react';

const HeroSection = () => {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Get ready to test your knowledge and have fun with our quizzes! This Quiz App is developed By Yohanes Mesfin for more information my email is yohanesmesfin3@gmail.com');
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-6" style={{ backgroundImage: "url('/img/quiz.jpg')",   backgroundSize: 'cover', 
    backgroundPosition: 'center' }}>
    {/* <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-6" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?exam')" }}> */}

      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl mb-4">Welcome to the Quiz App</h1>
        <p className="text-lg mb-6">Test your knowledge with our fun quizzes!</p>
        <button 
          onClick={showMessage} 
          className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
        >
          Learn More
        </button>
        {message && <p className="mt-4 text-xl">{message}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
