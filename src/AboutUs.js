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
          We are a team dedicated to making appointment scheduling easier and more efficient. We believe that everyone should have access to a convenient and reliable way to manage their appointments.
        </p>
        <p>
          Our platform provides a user-friendly interface for both individuals and businesses. Individuals can easily find appointments with the professionals they need, while businesses can streamline their appointment booking process and manage their schedules effectively.
        </p>
      </div>
      <h1 className="abt-main">Our Mission</h1>
      <p className='abtus-container'>
        Our mission is to simplify the appointment scheduling process for everyone. We strive to create a platform that is user-friendly, reliable, and accessible.
      </p>
      <h1 className="abt-main">Our Values</h1>
      <ul className='abtus-container'>
        <li>User-friendliness: We prioritize creating a platform that is easy to use for everyone.</li>
        <li>Reliability: We ensure that our platform is reliable and provides a seamless booking experience.</li>
        <li>Efficiency: We aim to optimize appointment scheduling for both individuals and businesses.</li>
        <li>Innovation: We continuously seek new ways to improve our platform and offer the best possible experience.</li>
      </ul>
      {/* Add any additional content you want, like team photos, testimonials, etc. */}
    </div>
  );
}

export default AboutUs;