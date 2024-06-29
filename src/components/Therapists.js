import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const doctorsData = [
  {
    name: 'Dr. Rajesh Kumar',
    degree: 'MBBS, MD',
    fees: '₹500',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543210',
    email: 'rajesh.kumar@gmail.com'
  },
  {
    name: 'Dr. Priya Sharma',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543211',
    email: 'priya.sharma@gmail.com'
  },
  {
    name: 'Dr. Arjun Mehta',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543212',
    email: 'arjun.mehta@gmail.com'
  },
  {
    name: 'Dr. Kavita Rao',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543213',
    email: 'kavita.rao@gmail.com'
  },
  {
    name: 'Dr. Suresh Patel',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543214',
    email: 'suresh.patel@gmail.com'
  },
  {
    name: 'Dr. Anjali Gupta',
    degree: 'MBBS, MD',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543215',
    email: 'anjali.gupta@gmail.com'
  },
  {
    name: 'Dr. Vikram Singh',
    degree: 'MBBS, MS',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543216',
    email: 'vikram.singh@gmail.com'
  },
  {
    name: 'Dr. Neha Desai',
    degree: 'MBBS, DNB',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543217',
    email: 'neha.desai@gmail.com'
  },
  {
    name: 'Dr. Rohit Sinha',
    degree: 'MBBS, MD',
    fees: '₹500',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore',
    phone: '+91-9876543218',
    email: 'rohit.sinha@gmail.com'
  },
  {
    name: 'Dr. Sneha Joshi',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad',
    phone: '+91-9876543219',
    email: 'sneha.joshi@gmail.com'
  },
  {
    name: 'Dr. Amit Patel',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune',
    phone: '+91-9876543220',
    email: 'amit.patel@gmail.com'
  },
  {
    name: 'Dr. Manisha Verma',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Pune',
    phone: '+91-9876543221',
    email: 'manisha.verma@gmail.com'
  },
  {
    name: 'Dr. Ravi Shankar',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad',
    phone: '+91-9876543222',
    email: 'ravi.shankar@gmail.com'
  },
  {
    name: 'Dr. Nidhi Aggarwal',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad',
    phone: '+91-9876543223',
    email: 'nidhi.aggarwal@gmail.com'
  },
  {
    name: 'Dr. Pankaj Kumar',
    degree: 'MBBS, MS',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur',
    phone: '+91-9876543224',
    email: 'pankaj.kumar@gmail.com'
  },
  {
    name: 'Dr. Meena Gupta',
    degree: 'MBBS, DNB',
    fees: '₹950',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur',
    phone: '+91-9876543225',
    email: 'meena.gupta@gmail.com'
  },
  {
    name: 'Dr. Sanjay Singh',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow',
    phone: '+91-9876543226',
    email: 'sanjay.singh@gmail.com'
  },
  {
    name: 'Dr. Anjana Mishra',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow',
    phone: '+91-9876543227',
    email: 'anjana.mishra@gmail.com'
  },
  {
    name: 'Dr. Varun Malhotra',
    degree: 'MBBS, DNB',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543228',
    email: 'varun.malhotra@gmail.com'
  },
  {
    name: 'Dr. Snehal Thakkar',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543229',
    email: 'snehal.thakkar@gmail.com'
  },
  {
    name: 'Dr. Arpita Das',
    degree: 'MBBS, MS',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543230',
    email: 'arpita.das@gmail.com'
  },
  {
    name: 'Dr. Harish Iyer',
    degree: 'MBBS, DNB',
    fees: '₹950',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543231',
    email: 'harish.iyer@gmail.com'
  },
  {
    name: 'Dr. Kiran Rao',
    degree: 'MBBS, MD',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543232',
    email: 'kiran.rao@gmail.com'
  },
  {
    name: 'Dr. Parvati Gupta',
    degree: 'MBBS, MS',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543233',
    email: 'parvati.gupta@gmail.com'
  },
  {
    name: 'Dr. Ramesh Desai',
    degree: 'MBBS, DNB',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543234',
    email: 'ramesh.desai@gmail.com'
  },
  {
    name: 'Dr. Sunita Sinha',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543235',
    email: 'sunita.sinha@gmail.com'
  },
  {
    name: 'Dr. Naveen Joshi',
    degree: 'MBBS, MS',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore',
    phone: '+91-9876543236',
    email: 'naveen.joshi@gmail.com'
  },
  {
    name: 'Dr. Anju Kapoor',
    degree: 'MBBS, DNB',
    fees: '₹600',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore',
    phone: '+91-9876543237',
    email: ' AnjuKapoor@gmail.com'
  },
  {
    name: 'Dr. Aman Verma',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore',
    phone: '+91-9876543238',
    email: 'aman.verma@gmail.com'
  },
  {
    name: 'Dr. Rina Patel',
    degree: 'MBBS, DNB',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Bangalore',
    phone: '+91-9876543239',
    email: 'rina.patel@gmail.com'
  },
  {
    name: 'Dr. Gaurav Sharma',
    degree: 'MBBS, MD',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad',
    phone: '+91-9876543240',
    email: 'gaurav.sharma@gmail.com'
  },
  {
    name: 'Dr. Anjali Reddy',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Hyderabad',
    phone: '+91-9876543241',
    email: 'anjali.reddy@gmail.com'
  },
  {
    name: 'Dr. Mehul Patel',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad',
    phone: '+91-9876543242',
    email: 'mehul.patel@gmail.com'
  },
  {
    name: 'Dr. Suman Sinha',
    degree: 'MBBS, DNB',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Ahmedabad',
    phone: '+91-9876543243',
    email: 'suman.sinha@gmail.com'
  },
  {
    name: 'Dr. Rahul Kumar',
    degree: 'MBBS, MS',
    fees: '₹650',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur',
    phone: '+91-9876543244',
    email: 'rahul.kumar@gmail.com'
  },
  {
    name: 'Dr. Pooja Sharma',
    degree: 'MBBS, MD',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Jaipur',
    phone: '+91-9876543245',
    email: 'pooja.sharma@gmail.com'
  },
  {
    name: 'Dr. Vikram Mehta',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow',
    phone: '+91-9876543246',
    email: 'vikram.mehta@gmail.com'
  },
  {
    name: 'Dr. Shilpa Joshi',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Lucknow',
    phone: '+91-9876543247',
    email: 'shilpa.joshi@gmail.com'
  },
  {
    name: 'Dr. Nikhil Patel',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543248',
    email: 'nikhil.patel@gmail.com'
  },
  {
    name: 'Dr. Ruchi Sharma',
    degree: 'MBBS, MS',
    fees: '₹900',
    photo: 'https://via.placeholder.com/150',
    location: 'Kolkata',
    phone: '+91-9876543249',
    email: 'ruchi.sharma@gmail.com'
  },
  {
    name: 'Dr. Karan Kapoor',
    degree: 'MBBS, MD',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543250',
    email: 'karan.kapoor@gmail.com'
  },
  {
    name: 'Dr. Swati Mehta',
    degree: 'MBBS, DNB',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Chennai',
    phone: '+91-9876543251',
    email: 'swati.mehta@gmail.com'
  },
  {
    name: 'Dr. Arvind Kumar',
    degree: 'MBBS, MS',
    fees: '₹800',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543252',
    email: 'arvind.kumar@gmail.com'
  },
  {
    name: 'Dr. Neelam Gupta',
    degree: 'MBBS, MD',
    fees: '₹850',
    photo: 'https://via.placeholder.com/150',
    location: 'Delhi',
    phone: '+91-9876543253',
    email: 'neelam.gupta@gmail.com'
  },
  {
    name: 'Dr. Deepak Joshi',
    degree: 'MBBS, DNB',
    fees: '₹700',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543254',
    email: 'deepak.joshi@gmail.com'
  },
  {
    name: 'Dr. Priyanka Singh',
    degree: 'MBBS, MD',
    fees: '₹750',
    photo: 'https://via.placeholder.com/150',
    location: 'Mumbai',
    phone: '+91-9876543255',
    email: 'priyanka.singh@gmail.com',
  },

]

const locations = [
  'Kolkata', 'Chennai', 'Delhi', 'Mumbai',
  'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad',
  'Jaipur', 'Lucknow'
];


const Therapists= () => {
  const [selectedLocation, setSelectedLocation] = useState('Kolkata'); 
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    
    const filtered = doctorsData.filter(doctor => doctor.location === selectedLocation);
    setFilteredDoctors(filtered);
  }, [selectedLocation]);

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
                    <p className="text-gray-900"> Fees : <span className='text-gray-600'>{doctor.fees}</span></p>
                    <p className="text-gray-900"> Contact Number : <span className="text-gray-600"> {doctor.phone}</span> </p>
                    <p className="text-gray-900" > Email : <span className="text-gray-600"> {doctor.email}</span> </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={doctor.photo} alt={doctor.name} className="w-40 h-40 rounded-full" />
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
  );
};

export default Therapists;