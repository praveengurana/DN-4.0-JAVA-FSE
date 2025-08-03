import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Here are some available flight details:</p>
      <ul>
        <li>Hyderabad to Delhi - ₹4500</li>
        <li>Mumbai to Bangalore - ₹4000</li>
        <li>Chennai to Kolkata - ₹4800</li>
      </ul>
      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
}

export default GuestPage;
