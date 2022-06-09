import React from 'react';
import estilos from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, wind, name, img, onClose, id }) {
  let prom = (min + max) / 2
  return (
    <div className={estilos.contenedor}>
      <button className={estilos.btn} onClick={onClose}>X</button>

      <div>
        <div className={estilos.cont}>
          <h1 className={estilos.temp}>{prom}°</h1>
          <img className={estilos.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen no encontrada' />
        </div>
        <div className={estilos.infoTemp}>
          <p>↓ {min}° / ↑ {max}°</p>
          <p>{wind} km/h</p>
        </div>
        <Link style={{ 'textDecoration': 'none' }} to={`/ciudad/${id}`}><h5 className={estilos.titleStyle}>{name}</h5></Link>
      </div>

    </div>
  )
};

