import React from "react";
import { Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'; // Import withRouter
import './Navigation.css';
//import MyContext from './MyContext'; //(optional, if using context for navigation state) // Import context

function Navbar({ shouldHideButton }) {
  const withHiddenAboutUsButton = (WrappedComponent) => (props) => {
    const { location } = props;
    const shouldHideButton = location.pathname === '/about';
  
    return <WrappedComponent shouldHideButton={shouldHideButton} {...props} />;
  };

    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home"><button  className="navButton">Home</button></Link></li>
          {!shouldHideButton &&<li><Link to="/about"><button  className="navButton">About Us</button></Link></li>}
          <li><Link to="/contact"><button  className="navButton">Contact Us</button></Link></li>
        </ul>
          <img src="/logo.jpg" alt="Brand Logo" class="logo"/>
      </nav>
    );
}

export default Navbar;