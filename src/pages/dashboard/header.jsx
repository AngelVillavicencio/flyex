import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // CSS
import logo from '/src/assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
      
      <img src={logo} alt="FlyEx Logo" className="h-12" />
      </Link>
      
      <button className="login-button">Conecta tu wallet</button>
    </header>
  );
}

export default Header;