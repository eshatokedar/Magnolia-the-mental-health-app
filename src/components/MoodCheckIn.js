// src/components/MoodCheckIn.js
import React, { useState } from 'react';
import './MoodCheckIn.css';

const MoodCheckIn = ({ onClose }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [score, setScore] = useState(null);

  const scores = {
    'Not at all': 1,
    'Several days': 2,
    'More than half the days': 3,
    'Nearly every day': 4
  };

  const calculateScore = () => {
    const totalScore = 
      (scores[q1] || 0) +
      (scores[q2] || 0) +
      (scores[q3] || 0) +
      (scores[q4] || 0) +
      (scores[q5] || 0);
    return totalScore;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = calculateScore();
    setScore(totalScore);
    if (totalScore > 10) {
      alert('Your total score indicates that you may need therapy.');
    } else {
      alert('Your total score is within a healthy range.');
    }
  };

  return (
    <div className="mood-check-in-container">
      <button onClick={onClose} className="close-button">Close</button>
      <form onSubmit={handleSubmit} className="mood-check-in-form">
        <h2>Daily Mood Check-In</h2>

        <label>
          Have you been feeling down, depressed, or hopeless over the past two weeks?
          <select value={q1} onChange={(e) => setQ1(e.target.value)}>
            <option value="">Select...</option>
            <option value="Not at all">Not at all</option>
            <option value="Several days">Several days</option>
            <option value="More than half the days">More than half the days</option>
            <option value="Nearly every day">Nearly every day</option>
          </select>
        </label>

        <label>
          Have you experienced little interest or pleasure in doing things?
          <select value={q2} onChange={(e) => setQ2(e.target.value)}>
            <option value="">Select...</option>
            <option value="Not at all">Not at all</option>
            <option value="Several days">Several days</option>
            <option value="More than half the days">More than half the days</option>
            <option value="Nearly every day">Nearly every day</option>
          </select>
        </label>

        <label>
          Do you often feel nervous, anxious, or on edge?
          <select value={q3} onChange={(e) => setQ3(e.target.value)}>
            <option value="">Select...</option>
            <option value="Not at all">Not at all</option>
            <option value="Several days">Several days</option>
            <option value="More than half the days">More than half the days</option>
            <option value="Nearly every day">Nearly every day</option>
          </select>
        </label>

        <label>
          Do you have trouble falling or staying asleep, or sleeping too much?
          <select value={q4} onChange={(e) => setQ4(e.target.value)}>
            <option value="">Select...</option>
            <option value="Not at all">Not at all</option>
            <option value="Several days">Several days</option>
            <option value="More than half the days">More than half the days</option>
            <option value="Nearly every day">Nearly every day</option>
          </select>
        </label>

        <label>
          Have you felt that you have trouble concentrating on things, such as reading the newspaper or watching television?
          <select value={q5} onChange={(e) => setQ5(e.target.value)}>
            <option value="">Select...</option>
            <option value="Not at all">Not at all</option>
            <option value="Several days">Several days</option>
            <option value="More than half the days">More than half the days</option>
            <option value="Nearly every day">Nearly every day</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      {score !== null && <p className="results">Your total score: {score}</p>}
    </div>
  );
};

export default MoodCheckIn;
