import React from 'react';
import estilos from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={estilos.contenedor}>
      <button className={estilos.btn} onClick={onClose}>X</button>
      <Link style={{'textDecoration': 'none'}} to={`/ciudad/${id}`}><h4 className={estilos.titleStyle}>{name}</h4></Link>
      <div className={estilos.infoCont}>
        <div>
          <h5>Min</h5>
          <h6>{min}°</h6>
        </div>
        <div>
          <h5>Max</h5>
          <h6>{max}°</h6>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Imagen no encontrada' />
      </div>
    </div>
  )
};

