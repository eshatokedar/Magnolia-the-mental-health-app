import React from 'react';

const QuizCard = ({ title, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default QuizCard;
