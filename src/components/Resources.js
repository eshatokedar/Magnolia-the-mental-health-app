import React from 'react';
import './Resources.css'; 

const Resources = () => {
  return (
    <div className="container">
      <h1 className="resources-title">Mental Health Resources</h1>
      <ul>
        <li><a href="https://www.mentalhealth.gov">MentalHealth.gov</a></li>
        <li><a href="https://www.nami.org">NAMI</a></li>
        <li><a href="https://www.mhanational.org">Mental Health America</a></li>
      </ul>
    </div>
  );
};

export default Resources;

