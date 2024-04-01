import React from "react";
import Navbar from "./Components/Navigation";
import './HomePage.css';

function LeftComponent() {
    return (
      <div id="left-component">
          <img src="/user.png" alt="user"/>
          <h1> Vedant Shirbhate </h1>
          <p>Age: 19</p>
          <p>Gender: Not Specific</p>
        {/* Content for left component */}
      </div>
    );
  }
  
  function MiddleComponent() {
    return (
      <div id="middle-component">
        {/* Content for middle component */}
        <h1>Appointments</h1>
        <p>No Upcomming Appointments</p>
      </div>
    );
  }
  
  function RightComponent() {
    return (
      <div id="right-component">
        {/* Content for right component */}
        <h1>Notifications</h1>
        <p>No New Notificatiosn</p>
      </div>
    );
}

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default HomePage;