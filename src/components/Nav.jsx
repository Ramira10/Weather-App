import React from 'react';
/* import Logo from '../sol.png' */
import SearchBar from './SearchBar.jsx';
import estilos from './Nav.module.css'
import { Link } from "react-router-dom"


function Nav({ onSearch }) {
  return (
    <div>
      <nav className={estilos.titleStyle}>
      <Link to="/"> <img className={estilos.img} src="http://openweathermap.org/img/wn/03d@2x.png" alt='' /> </Link>
        <Link to='/home' style={{ 'textDecoration': 'none' }}>
          <h4 className={estilos.weather}>
            Weather APP
          </h4>
        </Link>
      </nav>
      <Link to='/about' style={{ 'textDecoration': 'none' }}>
        <h5 className={estilos.about}>About</h5>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
