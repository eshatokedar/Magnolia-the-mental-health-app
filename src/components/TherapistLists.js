// src/components/TherapistList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './TherapistLists.css';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const therapistsCollection = collection(db, 'therapists');
        const therapistSnapshot = await getDocs(therapistsCollection);
        const therapistList = therapistSnapshot.docs.map(doc => doc.data());

        const cityList = Array.from(new Set(therapistList.map(therapist => therapist.Location)));

        setTherapists(therapistList);
        setCities(cityList);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredTherapists = selectedCity 
    ? therapists.filter(therapist => therapist.Location === selectedCity) 
    : therapists;

  return (
    <div className="therapist-list">
      <h2>Therapists</h2>
      <div className="filter-container">
        <label htmlFor="city-select">Sort by City: </label>
        <select id="city-select" value={selectedCity} onChange={handleCityChange}>
          <option value="">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {filteredTherapists.length === 0 ? (
        <p>No therapists found.</p>
      ) : (
        <ul>
          {filteredTherapists.map((therapist, index) => (
            <li key={index}>
              <img src={therapist.imageUrl} alt={therapist.name} />
              <h3>{therapist.Name}</h3>
              <p>Specialization: {therapist.Specialization}</p>
              <p>Contact: {therapist.Email}</p>
              <p>Location: {therapist.Location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TherapistList;
