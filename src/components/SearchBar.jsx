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
      <input
        type="text"
        placeholder="Write here..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={estilos.btn} type="submit" value="ADD CITY" />
    </form>
  );
}