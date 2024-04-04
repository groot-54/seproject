import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import Navbar from './Components/Navigation';
import './Appointment.css';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: '',
    service: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); 
  };

  return (
    <div className='apt-cont'>
      <Navbar />
      <div className='appointment-form'>
        <form >
          <h2>Book Appointment</h2>
          <div>
            <label htmlFor="date">Date:</label>
            <DatePicker
              id='date-pic'
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd" 
              minDate={new Date()} 
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <select id="time" name="time" value={formData.time} onChange={handleChange}>
              <option value="">Select Time</option>
              <option value="">10 a.m - 11 a.m</option>
              <option value="">11 a.m - 12 noon</option>
              <option value="">12 a.m - 1 pm</option>
              <option value="">1 pm - 2 pm</option>
              <option value="">4 pm - 5 pm</option>
              <option value="">5 pm - 6 pm</option>
              <option value="">6 pm - 7 pm</option>
              <option value="">7 pm - 8 pm</option>
            </select>
          </div>
          <div>
            <label htmlFor="region">Select Region:</label>
            <select id="region" name="region" value={formData.service} onChange={handleChange}>
              <option value="">Select Region</option>
            </select>
            <label htmlFor="doctor">Select Doctor:</label>
            <select id="doctor" name="doctor" value={formData.service} onChange={handleChange}>
              <option value="">Select Doctor</option>
            </select>
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
