import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="home-title">Welcome to Magnolia!</h1>
        <p className="home-subtitle">We are here to help you with your mental health journey.</p>
      </div>
      <img
        className="hero-banner"
        src="https://brainandspinecenterllc.com/wp-content/uploads/2024/02/20240212_BS_MentalHealthNeurology-Blog_Tile.jpg"
        alt="World Mental Health Day"
      />
      <div className="features-container">
        <h2 className="section-title">Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Personalized Mood Tracking</h3>
            <p>Track your mood and understand your emotional patterns over time.</p>
          </div>
          <div className="feature-card">
            <h3>Access to Professional Therapists</h3>
            <p>Get professional advice from certified therapists whenever you need it.</p>
          </div>
          <div className="feature-card">
            <h3>Daily Mindfulness Exercises</h3>
            <p>Engage in daily mindfulness exercises to improve your mental well-being.</p>
          </div>
        </div>
      </div>

      <div className="cta-container">
        <button className="cta-button">Sign Up Now</button>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Mental Health App. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

