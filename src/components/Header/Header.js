import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
      <img src="images/logo.png" alt="Logo" className="logo" />
      <nav>
        <ul>
          <Link to="/login">Login</Link>
          
        </ul>
      </nav>
    </header>
  );
};
export default Header;