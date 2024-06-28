import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import Connect from './components/Connect';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/connect" element={<Connect/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


