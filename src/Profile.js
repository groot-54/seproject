import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Link} from 'react-router-dom';
import Navbar from './Components/Navigation';

function Profile({ profileData, onSubmit }) {
  // const [formData, setFormData] = useState(profileData); // Pre-populate form

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmit(formData); // Pass edited data to submit function
  // };

  return (
    <div className='prf-cont'>
      <Navbar />
      <div className="profile-edit-container">
        <h2>User Profile</h2>
        <form>
          <img src="/user.png" alt="user"/>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Vedant Shirbhate'
            // value={formData.username}
            // onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Shirbhatevp@rknec.edu'
            // value={formData.email}
            // onChange={handleChange}
            required
          />
          <label htmlFor="bio" id='bio2'>Bio:</label>
          <textarea
            id="bio"
            name="bio"
            // value={formData.bio}
            // onChange={handleChange}
          />
        <button type="submit">Save Changes</button>
        <Link to='/'><button type="submit">Logout</button></Link>
      </form>
    </div>
    </div>
  );
}

export default Profile;
