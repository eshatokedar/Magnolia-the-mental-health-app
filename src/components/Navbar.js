import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/emergency" className="nav-link">Emergency</Link>
      <Link to="/connect" className="nav-link">Therapists</Link>
    </nav>
  );
};

export default Navbar;

