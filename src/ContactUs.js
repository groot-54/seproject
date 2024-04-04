import React, { useState } from 'react';
import './ContactUs.css'
import Navbar from './Components/Navigation';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form submission logic here (e.g., send data to server)
    console.log('Form Submitted:', formData);

    setIsSubmitted(true);

    // Reset form after successful submission (optional)
    setFormData({ name: '', email: '', mobile: '',message: '' });
  };

  return (
    <div id='cont'>
        <Navbar />
        <div className='contus'> 
          <div className='contus-container'>
              <h2 align="center">We are here to help!</h2>
              <h1 id="cnt-h1">Location</h1>
              <p>Ramdeobaba College of Engineering and Management, Nagpur</p>
              <h1>Customer Support</h1>
              <p>Contact No.: +91 1234567809</p>
              <a href="mailto:cutomercare@appointfacilator.com">cutomercare@appointfacilator.com</a>
          </div>
          <div className="contact-us">
              <h1>Contact Us</h1>
              {isSubmitted ? (
                  <p>Thank you for your message! We will get back to you soon.</p>
              ) : (
                  <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  <label htmlFor="message">Mobile No:</label>
                  <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                  <button type="submit" className='send-button'>Send Message</button>
                  </form>
              )}
          </div>
        </div>
    </div>
  );
}

export default ContactUs;
