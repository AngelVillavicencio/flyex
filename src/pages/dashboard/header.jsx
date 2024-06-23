import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FlyEx</div>
      <nav>
        <ul>
          <li><Link to="/">Comprar Viajes</Link></li>
          <li><Link to="/">Vender Viajes</Link></li>
          <li><Link to="/">Nosotros</Link></li>
          <li><Link to="/">Políticas y Condiciones</Link></li>
        </ul>
      </nav>
      <button className="login-button">Iniciar Sesión</button>
    </header>
  );
}

export default Header;