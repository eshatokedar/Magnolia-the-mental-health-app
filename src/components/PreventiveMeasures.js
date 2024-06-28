import React, { useState } from 'react';
import './PreventiveMeasures.css';

const PreventiveMeasures = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <h1 className="emergency-title">Preventive Measures</h1>
      <ul className="preventive-measures-list">
        {[
          {
            title: "Eliminate access to lethal means",
            content:
              "Reduce access to objects or substances that could be used for self-harm, such as firearms, medications, or sharp objects. Safely store them away or remove them from your environment. Get rid of anything you can use to harm yourself at home. Take the help of a loved one to remove these tools out of your sight. Reach out for professional help.",
          },
          {
            title: "Have a safety and crisis plan",
            content:
              "Develop a personalized plan that outlines steps to take during a crisis. This can include emergency contacts, coping strategies, and places to go for immediate help.",
          },
          {
            title: "Create a hope box",
            content:
              "A hope box is a collection of items that provide comfort and remind you of reasons to keep going. It can include photos, letters, favorite quotes, or mementos from happy times.",
          },
          {
            title: "Don't stay by yourself",
            content:
              "Reach out to friends, family, or support groups when you're feeling low. Social connection can provide emotional support and reduce feelings of isolation.",
          },
        ].map((item, index) => (
          <li
            key={index}
            className="preventive-measures-item"
            onClick={() => handleToggle(index)}
          >
            <div className="preventive-measures-header">
              <b>{item.title}</b>
              <span className="toggle-icon">
                {expanded === index ? "-" : "+"}
              </span>
            </div>
            {expanded === index && (
              <p className="preventive-measures-content">{item.content}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreventiveMeasures;

