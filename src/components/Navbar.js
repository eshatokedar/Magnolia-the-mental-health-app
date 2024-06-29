import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/emergency" className="nav-link">Emergency</Link>
      <Link to="/therapists" className="nav-link">Therapists</Link>
      <Link to="/assessment" className="nav-link">Assessments</Link>
    </nav>
  );
};

export default Navbar;

