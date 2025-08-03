import React from 'react';
import './App.css';

function App() {
  // Office objects
 const officeList = [
  {
    name: "WeWork",
    rent: 55000,
    address: "Banjara Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    name: "SmartOffice",
    rent: 75000,
    address: "MG Road, Bengaluru",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
];


  // JSX Return
  return (
    <div className="App">
      <h1>Office Space At Affordable Range</h1>
      {
        officeList.map((office, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={office.image} alt={office.name} style={{ width: '250px' }} />
            <h2>Name: {office.name}</h2>
              <strong>
            <p>
            
              <span style={{ color: office.rent < 60000 ? 'red' : 'green', marginLeft: '5px' }}>
                Rent: ₹{office.rent}
              </span>
            </p>
            <p>Address: {office.address}</p>
            </strong>
          </div>
        ))
      }
    </div>
  );
}

export default App;
