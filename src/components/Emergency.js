import React from 'react';
import './Emergency.css';
import PreventiveMeasures from './PreventiveMeasures';

const Emergency = () => {
  return (
    <div className="container">
      <h1 className="emergency-title">Suicide Prevention Hotlines</h1>
      <ul>
        <li>
          <b>NIMHANS</b> <br />
          +91 80461 10007
        </li>
        <li>
          <b>Mpower</b> <br />
          1800-120-820050
        </li>
        <li>
          <b>iCall</b> <br />
          022-25521111
        </li>
      </ul>
      <PreventiveMeasures />
    </div>
  );
};

export default Emergency;
