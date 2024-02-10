/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';



const Booking = ({ onClose, onBook,setBooking }) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
  
    const handleBook = () => {
      if (name && mobile && email && bookingDate) {
        onBook({ name, mobile, email, bookingDate });
        setBooking(false);
      } else {
        alert('Please fill in all the fields.');
      }

    };
  
    const dialogStyles = {
        width: '300px',
        padding: '20px',
        backgroundColor: '#007BFF',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex:"20000"
    };
  
    const headingStyles = {
      fontSize: '1.5rem',
      marginBottom: '15px',
    };
  
    const labelStyles = {
      display: 'block',
      marginBottom: '10px',
    };
  
    const inputStyles = {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      marginTop: '5px',
    };
  
    const buttonsContainerStyles = {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
    };
  
    const buttonStyles = {
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
    };
  
    const buttonHoverStyles = {
      backgroundColor: '#0056b3',
    };
  
    return (
      <div style={dialogStyles}>
        <h2 style={headingStyles}>Book Yoga Class</h2>
        <label style={labelStyles}>
          Name:
          <input type="text" style={inputStyles} value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label style={labelStyles}>
          Mobile Number:
          <input type="text" style={inputStyles} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <label style={labelStyles}>
          Email:
          <input type="text" style={inputStyles} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label style={labelStyles}>
          Booking Date:
          <input type="date" style={inputStyles} value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
        </label>
        <div style={buttonsContainerStyles}>
          <button style={buttonStyles} onClick={()=>setBooking(false)}>Cancel</button>
          <button style={{ ...buttonStyles, ...buttonHoverStyles }} onClick={handleBook}>Book Now</button>
        </div>
      </div>
    );
  };

export default Booking
