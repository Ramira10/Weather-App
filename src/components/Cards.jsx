import React from 'react';
import Card from './Card'
import estilos from './Cards.module.css'

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={estilos.cardsStyle}>
        {
          cities.length ?
            cities.map(c =>
              <Card
                key={c.id}
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                onClose={() => onClose(c.id)}
                id={c.id}
              />
            )

            : <div className={estilos.load}>
              <h2 className={estilos.tlt}>Do you want to know today's weather?</h2>
              <h2 className={estilos.tlt}>SEARCH!</h2>
              <img className={estilos.world} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rotating_earth_%28huge%29.gif/480px-Rotating_earth_%28huge%29.gif" />
            </div>
        }
      </div>
    );
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
}