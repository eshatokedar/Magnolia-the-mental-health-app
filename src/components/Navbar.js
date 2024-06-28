import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/resources" className="nav-link">Resources</Link>
      <Link to="/connect" className="nav-link">Connect</Link>
    </nav>
  );
};

export default Navbar;

