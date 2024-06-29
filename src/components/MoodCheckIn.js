// src/components/MoodCheckIn.js
import React, { useState } from 'react';
import QuizCard from './QuizCard';
import QuizQuestions from './QuizQuestions';

const MoodCheckIn = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleCardClick = (quizType) => {
    setSelectedQuiz(quizType);
  };

  const handleClose = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="p-6">
      {!selectedQuiz ? (
       <div className="flex space-x-4 overflow-x-auto justify-center text-black">
       <div className="w-1/3 h-40 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
         <div>
           <div className="text-lg font-semibold">GAD-7</div>
           <div className="text-sm">Generalized Anxiety Disorder 7-item scale</div>
           <p className="text-xs mt-2">The GAD-7 is a screening tool used to measure the severity of generalized anxiety disorder.</p>
         </div>
         <button
           onClick={() => handleCardClick('gad7')}
           className="mt-4 bg-blue-500 text-white rounded py-2 px-4"
         >
           Let's Have the Test
         </button>
       </div>
     
       <div className="w-1/3 h-40 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
         <div>
           <div className="text-lg font-semibold">PHQ-8</div>
           <div className="text-sm">Patient Health Questionnaire 8-item</div>
           <p className="text-xs mt-2">The PHQ-8 is used for diagnosing and measuring the severity of depression.</p>
         </div>
         <button
           onClick={() => handleCardClick('phq8')}
           className="mt-4 bg-blue-500 text-white rounded py-2 px-4"
         >
           Let's Have the Test
         </button>
       </div>
     
       <div className="w-1/3 h-40 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
         <div>
           <div className="text-lg font-semibold">F40-10</div>
           <div className="text-sm">Fear and Anxiety Screening Tool</div>
           <p className="text-xs mt-2">The F40-10 helps in assessing the levels of fear and anxiety a person experiences.</p>
         </div>
         <button
           onClick={() => handleCardClick('f4010')}
           className="mt-4 bg-blue-500 text-white rounded py-2 px-4"
         >
           Let's Have the Test
         </button>
       </div>
     </div>
     
     
     
     
     
      ) : (
        <QuizQuestions quizType={selectedQuiz} onClose={handleClose} />
      )}
    </div>
  );
};

export default MoodCheckIn;
