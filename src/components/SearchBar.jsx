import React, { useState } from 'react';
import estilos from './Search.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  return (
    <form className={estilos.bar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      {
        window.location.href.includes("/home") ? 
        <div>
      <input
      type="text"
      placeholder="Write here..."
      value={city}
      onChange={e => setCity(e.target.value)}
      />
      <input className={estilos.btn} type="submit" value="Add City" />
      </div>
      : <div></div>
    }
    </form>
  );
}