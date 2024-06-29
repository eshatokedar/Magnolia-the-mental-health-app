// src/components/TherapistList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './TherapistLists.css';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const therapistsCollection = collection(db, 'therapists');
        const therapistSnapshot = await getDocs(therapistsCollection);
        const therapistList = therapistSnapshot.docs.map(doc => doc.data());
        setTherapists(therapistList);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="therapist-list">
      <h2>Therapists</h2>
      {therapists.length === 0 ? (
        <p>No therapists found.</p>
      ) : (
        <ul>
          {therapists.map((therapist, index) => (
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
