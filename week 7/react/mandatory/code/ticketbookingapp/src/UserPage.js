import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets.</p>
      <ul>
        <li>Hyderabad to Delhi - ₹4500 <button>Book</button></li>
        <li>Mumbai to Bangalore - ₹4000 <button>Book</button></li>
        <li>Chennai to Kolkata - ₹4800 <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
