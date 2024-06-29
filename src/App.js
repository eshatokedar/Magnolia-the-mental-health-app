import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import Emergency from './components/Emergency';
import Navbar from './components/Navbar';
import TherapistLists from './components/TherapistLists';
import MoodCheckIn from './components/MoodCheckIn';

function App() {

  const [showMoodCheckIn, setShowMoodCheckIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/emergency" element={<Emergency/>} />
        <Route path="/assessment" element={<MoodCheckIn/>} />
        <Route path="/therapists" element={<TherapistLists/>} />
        </Routes>
        {showMoodCheckIn && <MoodCheckIn onClose={() => setShowMoodCheckIn(false)} />}
      </div>
    </Router>
  );
}

export default App;


