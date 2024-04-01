import React, { useState } from 'react';
import './LoginPage.css';
import { Link} from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
    rememberMe: false,
    showPassword: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement login logic here (e.g., send data to server)
    console.log('Login data:', formData);

    // Reset form or redirect to dashboard on successful login (optional)
  };

  return (
    <div className="login-form">
      <h1>Welcome to Web-Based Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">Username/Email:</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={formData.usernameOrEmail}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="remember_me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="remember_me">Remember Me</label>
        </div>
        <Link to="/home"><button type="submit" className='login-button'>Login</button></Link>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
}

export default LoginPage;
