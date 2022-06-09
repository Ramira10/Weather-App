import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import Home from '../components/Home';
import Swal from 'sweetalert2';

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    // Lamada a la API externa ---> Datos
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3e9e9c2546209a18ca647b0e3c183813&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'City not found!',
          })
        }
      });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route
        exact path='/'
        render={() => <Home/>}
      />
      <Route
        path='/home'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        path='/about'
        component={About}
      />
      
      <Route
        exact path='/home'
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
      path='/ciudad/:ciudadId'
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}

      />
       
    </div>
  )
}


/* export default App; */
