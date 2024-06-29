import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import Emergency from './components/Emergency';
import Navbar from './components/Navbar';
import Therapists from './components/Therapists';
import MoodCheckIn from './components/MoodCheckIn';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/emergency" element={<Emergency/>} />
        <Route path="/assessment" element={<MoodCheckIn/>} />
        <Route path="/therapists" element={<Therapists/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


