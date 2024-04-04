import React from 'react';
import './AboutUs.css';
import Navbar from './Components/Navigation';

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <h1 className="abt-main">About Us</h1>
      <div className='abtus-container'>
        <p>
          We are a team with a project of making appointment scheduling easier and more efficient by developing a Web-base Appointment Facilitator.
        </p>
        <p>
          Our platform provides a user-friendly interface. Patients can easily find appointments with the doctor, while doctors/receptionist can manage their appointment booking process and manage their schedules effectively.
        </p>
      </div>
      <h1 className="abt-main">Our Mission</h1>
      <p className='abtus-container'>
        Our mission is to develop a near-to working project for Software Engineering. We tried to create a platform that is user-friendly, reliable, and accessible.
      </p>
      <h1 className="abt-main">Our Values</h1>
      <ul className='abtus-container'>
        <li>User-friendliness: We prioritize creating a platform that is easy to use for everyone.</li>
        <li>Reliability: We ensure that our platform is reliable and provides a seamless booking experience.</li>
        <li>Efficiency: We aim to optimize appointment scheduling for both individuals and businesses.</li>
        <li>Innovation: We continuously seek new ways to improve our platform and offer the best possible experience.</li>
      </ul>
    </div>
  );
}

export default AboutUs;