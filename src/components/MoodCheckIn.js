import React, { useState } from 'react';
import './MoodCheckIn.css';

const MoodCheckIn = () => {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [eatingHabits, setEatingHabits] = useState('');
  const [processedFood, setProcessedFood] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [vegeIntake, setVegeIntake] = useState('');
  const [fruitIntake, setFruitIntake] = useState('');
  const [mentalAilment, setMentalAilment] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [gym, setGym] = useState('');
  const [heartRacingExercise, setHeartRacingExercise] = useState('');
  const [caffeineIntake, setCaffeineIntake] = useState('');
  const [focusingProblems, setFocusingProblems] = useState('');
  const [racingMind, setRacingMind] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [overwhelmed, setOverwhelmed] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      sex,
      age,
      eatingHabits,
      processedFood,
      waterIntake,
      vegeIntake,
      fruitIntake,
      mentalAilment,
      currentWeight,
      exerciseFrequency,
      gym,
      heartRacingExercise,
      caffeineIntake,
      focusingProblems,
      racingMind,
      stressLevel,
      overwhelmed,
    };

    const calculateResults = (data) => {
      const stressFactors = [
        parseInt(data.stressLevel),
        data.overwhelmed === 'Yes' ? 10 : 0,
        data.racingMind === 'Always' ? 10 : data.racingMind === 'Often' ? 7 : data.racingMind === 'Sometimes' ? 5 : data.racingMind === 'Rarely' ? 2 : 0,
        data.focusingProblems === 'Always' ? 10 : data.focusingProblems === 'Often' ? 7 : data.focusingProblems === 'Sometimes' ? 5 : data.focusingProblems === 'Rarely' ? 2 : 0,
      ];

      const sleepFactors = [
        data.waterIntake === 'Very high' ? 10 : data.waterIntake === 'High' ? 8 : data.waterIntake === 'Moderate' ? 5 : data.waterIntake === 'Low' ? 2 : 0,
        data.mentalAilment === 'Yes' ? 10 : 0,
        data.caffeineIntake === '5 or more' ? 10 : data.caffeineIntake === '3-4' ? 7 : data.caffeineIntake === '1-2' ? 5 : data.caffeineIntake === 'None' ? 0 : 0,
      ];

      const nutritionFactors = [
        data.eatingHabits === 'Very healthy' ? 10 : data.eatingHabits === 'Healthy' ? 8 : data.eatingHabits === 'Average' ? 5 : data.eatingHabits === 'Unhealthy' ? 2 : 0,
        data.processedFood === 'Yes' ? 0 : 10,
        data.vegeIntake === 'Very high' ? 10 : data.vegeIntake === 'High' ? 8 : data.vegeIntake === 'Moderate' ? 5 : data.vegeIntake === 'Low' ? 2 : 0,
        data.fruitIntake === 'Very high' ? 10 : data.fruitIntake === 'High' ? 8 : data.fruitIntake === 'Moderate' ? 5 : data.fruitIntake === 'Low' ? 2 : 0,
      ];

      const healthFactors = [
        data.exerciseFrequency === 'Daily' ? 10 : data.exerciseFrequency === 'Several times a week' ? 8 : data.exerciseFrequency === 'Once a week' ? 5 : data.exerciseFrequency === 'Rarely' ? 2 : 0,
        data.currentWeight === 'Very satisfied' ? 10 : data.currentWeight === 'Satisfied' ? 8 : data.currentWeight === 'Neutral' ? 5 : data.currentWeight === 'Dissatisfied' ? 2 : 0,
        data.heartRacingExercise === 'Yes' ? 10 : 0,
        data.gym === 'Yes' ? 10 : 0,
      ];

      const average = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;

      const results = {
        stress: average(stressFactors) * 10,
        sleep: average(sleepFactors) * 10,
        nutrition: average(nutritionFactors) * 10,
        overallHealth: average(healthFactors) * 10,
      };

      return results;
    };

    const results = calculateResults(data);
    setResults(results);
  };

  return (
    <div className="mood-check-in-container">
      <form className="mood-check-in-form" onSubmit={handleSubmit}>
        <h2>Health Check-In</h2>

        <label>
          Sex:
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Eating habits:
          <select value={eatingHabits} onChange={(e) => setEatingHabits(e.target.value)}>
            <option value="">Select...</option>
            <option value="Very healthy">Very healthy</option>
            <option value="Healthy">Healthy</option>
            <option value="Average">Average</option>
            <option value="Unhealthy">Unhealthy</option>
            <option value="Very unhealthy">Very unhealthy</option>
          </select>
        </label>

        <label>
          Do you eat processed food 3 or more times a week?
          <select value={processedFood} onChange={(e) => setProcessedFood(e.target.value)}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Water intake:
          <select value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)}>
            <option value="">Select...</option>
            <option value="Very high">Very high</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
            <option value="Very low">Very low</option>
          </select>
        </label>

        <label>
          Vegetable intake in a week:
          <select value={vegeIntake} onChange={(e) => setVegeIntake(e.target.value)}>
            <option value="">Select...</option>
            <option value="Very high">Very high</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
            <option value="Very low">Very low</option>
          </select>
        </label>

        <label>
          Fruit intake in a week:
          <select value={fruitIntake} onChange={(e) => setFruitIntake(e.target.value)}>
            <option value="">Select...</option>
            <option value="Very high">Very high</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
            <option value="Very low">Very low</option>
          </select>
        </label>

        <label>
          Serious mental ailment:
          <select value={mentalAilment} onChange={(e) => setMentalAilment(e.target.value)}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          How do you feel about your current weight?
          <select value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)}>
            <option value="">Select...</option>
            <option value="Very satisfied">Very satisfied</option>
            <option value="Satisfied">Satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Dissatisfied">Dissatisfied</option>
            <option value="Very dissatisfied">Very dissatisfied</option>
          </select>
        </label>

        <label>
          How often do you exercise?
          <select value={exerciseFrequency} onChange={(e) => setExerciseFrequency(e.target.value)}>
            <option value="">Select...</option>
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </label>

        <label>
          Gym:
          <select value={gym} onChange={(e) => setGym(e.target.value)}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Heart racing exercise:
          <select value={heartRacingExercise} onChange={(e) => setHeartRacingExercise(e.target.value)}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Caffeinated drinks intake per day:
          <select value={caffeineIntake} onChange={(e) => setCaffeineIntake(e.target.value)}>
            <option value="">Select...</option>
            <option value="None">None</option>
            <option value="1-2">1-2</option>
            <option value="3-4">3-4</option>
            <option value="5 or more">5 or more</option>
          </select>
        </label>

        <label>
          Problems focusing:
          <select value={focusingProblems} onChange={(e) => setFocusingProblems(e.target.value)}>
            <option value="">Select...</option>
            <option value="Never">Never</option>
            <option value="Rarely">Rarely</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Often">Often</option>
            <option value="Always">Always</option>
          </select>
        </label>

        <label>
          Is your mind racing so fast that you feel like you have a million thoughts a minute?
          <select value={racingMind} onChange={(e) => setRacingMind(e.target.value)}>
            <option value="">Select...</option>
            <option value="Never">Never</option>
            <option value="Rarely">Rarely</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Often">Often</option>
            <option value="Always">Always</option>
          </select>
        </label>

        <label>
          How do you rate your current level of Stress?
          <select value={stressLevel} onChange={(e) => setStressLevel(e.target.value)}>
            <option value="">Select...</option>
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>

        <label>
          Have you felt overwhelmed in the last 2 weeks?
          <select value={overwhelmed} onChange={(e) => setOverwhelmed(e.target.value)}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      {results && (
        <div className="results">
          <h3>Your Health Check-In Results</h3>
          <p>Stress: {results.stress.toFixed(2)}%</p>
          <p>Sleep: {results.sleep.toFixed(2)}%</p>
          <p>Healthy Eating/Nutrition: {results.nutrition.toFixed(2)}%</p>
          <p>Overall Health: {results.overallHealth.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default MoodCheckIn;


