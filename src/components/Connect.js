import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const doctorsData = [
  {
    name: 'Dr. Rajesh Kumar',
    degree: 'MBBS, MD',
    fees: '₹500',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata'
  },
  {
    name: 'Dr. Priya Sharma',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata'
  },
  {
    name: 'Dr. Arjun Mehta',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai'
  },
  {
    name: 'Dr. Kavita Rao',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai'
  },
  {
    name: 'Dr. Suresh Patel',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi'
  },
  {
    name: 'Dr. Anjali Gupta',
    degree: 'MBBS, MD',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi'
  },
  {
    name: 'Dr. Vikram Singh',
    degree: 'MBBS, MS',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai'
  },
  {
    name: 'Dr. Neha Desai',
    degree: 'MBBS, DNB',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai'
  },
  {
    name: 'Dr. Rohit Sinha',
    degree: 'MBBS, MD',
    fees: '₹500',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore'
  },
  {
    name: 'Dr. Sneha Joshi',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad'
  },
  {
    name: 'Dr. Amit Patel',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune'
  },
  {
    name: 'Dr. Manisha Verma',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune'
  },
  {
    name: 'Dr. Ravi Shankar',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad'
  },
  {
    name: 'Dr. Nidhi Aggarwal',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad'
  },
  {
    name: 'Dr. Pankaj Kumar',
    degree: 'MBBS, MS',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur'
  },
  {
    name: 'Dr. Meena Gupta',
    degree: 'MBBS, DNB',
    fees: '₹950',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur'
  },
  {
    name: 'Dr. Sanjay Singh',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow'
  },
  {
    name: 'Dr. Anjana Mishra',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow'
  },
  {
    name: 'Dr. Varun Malhotra',
    degree: 'MBBS, DNB',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata'
  },
  {
    name: 'Dr. Snehal Thakkar',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata'
  },
  {
    name: 'Dr. Arpita Das',
    degree: 'MBBS, MS',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai'
  },
  {
    name: 'Dr. Harish Iyer',
    degree: 'MBBS, DNB',
    fees: '₹950',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai'
  },
  {
    name: 'Dr. Kiran Rao',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi'
  },
  {
    name: 'Dr. Parvati Gupta',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi'
  },
  {
    name: 'Dr. Ramesh Desai',
    degree: 'MBBS, DNB',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai'
  },
  {
    name: 'Dr. Sunita Sinha',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai'
  },
  {
    name: 'Dr. Naveen Joshi',
    degree: 'MBBS, MS',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore'
  },
  {
    name: 'Dr. Anju Kapoor',
    degree: 'MBBS, DNB',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore'
  },
  {
    name: 'Dr. Tarun Reddy',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad'
  },
  {
    name: 'Dr. Bhavna Joshi',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad'
  },
  {
    name: 'Dr. Pooja Sharma',
    degree: 'MBBS, DNB',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune'
  },
  {
    name: 'Dr. Vivek Bansal',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune'
  },
  {
    name: 'Dr. Mukesh Patel',
    degree: 'MBBS, MS',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad'
  },
  {
    name: 'Dr. Shalini Singh',
    degree: 'MBBS, DNB',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad'
  },
  {
    name: 'Dr. Jitendra Verma',
    degree: 'MBBS, MD',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur'
  },
  {
    name: 'Dr. Rachna Sharma',
    degree: 'MBBS, MS',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad'
  },
  
];

const locations = [
  'Kolkata', 'Chennai', 'Delhi', 'Mumbai',
  'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad',
  'Jaipur', 'Lucknow'
];

const Connect = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    const filtered = doctorsData.filter(doctor => doctor.location === location);
    setFilteredDoctors(filtered);
  };

  useEffect(() => {
    if (filteredDoctors.length > 0) {
      const element = document.getElementById('doctor-list');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [filteredDoctors]);

  return (
      <div className="p-4 flex flex-col items-center">
        <div className="flex justify-center mb-8 w-full">
          <select
            onChange={handleLocationChange}
            value={selectedLocation}
            className="w-1/5 bg-[#2ca4aa] text-white py-3 px-10 rounded"
          >
            <option value="" disabled className='bg-white shadow-md shadow-slate-600 text-[#2ca4aa]'>Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {selectedLocation && (
          <div id="doctor-list" className="mt-8 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Therapists in {selectedLocation}</h2>
            <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor, index) => (
                  <div key={index} className="border p-4 rounded shadow-lg grid grid-cols-2 gap-4 space-y-3 shadow-[#2ca4aa] mt-2 mb-6">
                    <div className='mt-5 space-y-5'>
                      <h3 className="text-xl font-semibold">{doctor.name}</h3>
                      <p className="text-gray-700">{doctor.degree}</p>
                      <p className="text-gray-700">{doctor.fees}</p>
                    </div>
                    <div className="flex justify-center items-center ">
                      <img src={doctor.photo} alt={doctor.name} className="w-36 h-36 rounded-full " />
                    </div>
                  </div>
                ))
              ) : (
                <p>No doctors available in this location.</p>
              )}
            </div>
          </div>
        )}
  </div>
  )
};

export default Connect;




