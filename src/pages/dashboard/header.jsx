import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FlyEx</div>
      <nav>
        <ul>
          <li className='text-center'><Link to="/comprar">Comprar Viajes</Link></li>
          <li className='text-center'><Link to="/vender">Vender Viajes</Link></li>
        </ul>
      </nav>
      <button className="login-button">Conecta tu wallet</button>
    </header>
  );
}

export default Header;