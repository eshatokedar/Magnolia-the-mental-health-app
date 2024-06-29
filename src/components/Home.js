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
        // src="https://brainandspinecenterllc.com/wp-content/uploads/2024/02/20240212_BS_MentalHealthNeurology-Blog_Tile.jpg"
        src="https://www.fcsok.org/wp-content/uploads/2023/05/wp_interactivebanner_May-scaled.jpg"
        
        alt="World Mental Health Day"
      />
      <p className='intro'>Mental health is an integral part of our overall well-being, encompassing our emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing our ability to handle stress, relate to others, and make decisions. Maintaining positive mental health enables individuals to:
realize their full potential, cope with the stresses of life, work productively and make meaningful contributions to their communities.</p>
      <h2 className='section-title'>Resources</h2>
      <div className='iframes'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zTuX_ShUrw0?si=fcLpa4lGIch2HSaD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/BZOLxSQwER8?si=SOdMyOSxx7lKhbIh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/voXP15pHOhI?si=SRq1aBZMnGEeSXk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>

       <div className='iframes'> 
        <iframe width="500" height="315" src="https://www.ncbi.nlm.nih.gov/books/NBK430973/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.medicalnewstoday.com/articles/37010" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="features-container">
        <h2 className="section-title">Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Multiple Assessment Tests</h3>
            <p>Track your mood and understand your emotional patterns over time.</p>
          </div>
          <div className="feature-card">
            <h3>Access to Professional Therapists</h3>
            <p>Get in touch with professionals in your city.</p>
          </div>
          <div className="feature-card">
            <h3>Emergency Guidelines</h3>
            <p>Suicide prevention hotlines, precautions.</p>
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

