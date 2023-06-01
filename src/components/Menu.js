import React from 'react';
import './Menu.css';
import logo from './ux-ui-logo.svg';

function  Menu(){

   return (
    <nav className="menu-container">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="/" className="menu-link">Página Inicial</a>
        </li>
        <li className="menu-item">
          <a href="/boaspraticas" className="menu-link">Boas Práticas</a>
        </li>
        <li className="menu-item">
          <a href="/sobre" className="menu-link">Sobre</a>
        </li>
        <li className="menu-item">
          <a href="/contato" className="menu-link">Contato</a>
        </li>
      </ul>
    </nav>
   );

}

export default Menu;