/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Booking.module.css'



const Booking = ({ onClose, onBook,setBooking }) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
  
    const handleBook = () => {
      if (name && mobile && email) {
        onBook({ name, mobile, email, bookingDate });
        toast.success("booking done")
        setBooking(false);
      } else {
        toast.error('Please fill in all the fields.');

      }

    };
  
    
  
    return (
        <div className={styles.dialog}>
        <h2 className={styles.heading}>Book Yoga Class</h2>
        <label className={styles.label}>
          Name:
          <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className={styles.label}>
          Mobile Number:
          <input type="text" className={styles.input} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <label className={styles.label}>
          Email:
          <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className={styles.label}>
          Booking Date:
          <input type="date" className={styles.input} value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
        </label>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={() => setBooking(false)}>Cancel</button>
          <button className={`${styles.button} ${styles.buttonHover}`} onClick={handleBook}>Book Now</button>
        </div>
      </div>
      
    );
  };

export default Booking
