import React, { useState } from 'react';

const questions = {
  gad7: [
    { text: "Feeling nervous, anxious, or on edge?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Not being able to stop or control worrying?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Worrying too much about different things?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Trouble relaxing?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Being so restless that it is hard to sit still?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Becoming easily annoyed or irritable?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling afraid as if something awful might happen?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
  ],
  phq8: [
    { text: "Little interest or pleasure in doing things?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling down, depressed, or hopeless?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Trouble falling or staying asleep, or sleeping too much?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling tired or having little energy?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Poor appetite or overeating?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling bad about yourself, or that you are a failure or have let yourself or your family down?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Trouble concentrating on things, such as reading the newspaper or watching television?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
  ],
  f4010: [
    { text: "Feeling anxious in social situations?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Avoiding social interactions?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Experiencing physical symptoms like sweating or trembling in social settings?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Fear of being judged or criticized?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling self-conscious in social situations?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Experiencing discomfort when speaking to strangers?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
    { text: "Feeling anxious even about upcoming social events?", options: ["Not at all", "Several days", "More than half the days", "Nearly every day"] },
  ]
};

const optionScores = {
  "Not at all": 0,
  "Several days": 1,
  "More than half the days": 2,
  "Nearly every day": 3
};

const QuizQuestions = ({ quizType, onClose }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const totalScore = Object.values(answers).reduce((total, answer) => total + optionScores[answer], 0);
    setResult(totalScore > 14 ? "You should seek professional help as soon as possible." : "You do not need Therapy necessarily, however if you want to, you can seek out professionals.");
  };

  const questionsList = questions[quizType] || [];

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {quizType.replace(/([A-Z])/g, ' $1').toUpperCase()} Quiz
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questionsList.map((question, index) => (
            <div key={index} className="space-y-2">
              <p className="font-medium">{question.text}</p>
              {question.options.map(option => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`} // Fixed backticks and curly braces
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    className="mr-2"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ))}
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
              Submit
            </button>
            <button type="button" onClick={onClose} className="text-blue-500 hover:underline">
              Close
            </button>
          </div>
        </form>
        {result && (
          <div className="mt-6 text-center p-4 rounded-lg bg-gray-200 shadow-inner">
            <p className="font-semibold">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestions;

