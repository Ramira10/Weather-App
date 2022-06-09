import React from "react";
import { Link } from "react-router-dom";
import style from "./Ciudad.module.css"

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className={style.container}>
                    <h1 className={style.title}>{city.name}</h1>
                    <div className="info">
                        <h2>Temperature: {city.temp} ºC</h2>
                        <h2>Weather: {city.weather}</h2>
                        <h2>Breeze: {city.wind} km/h</h2>
                        <h2>Amount of clouds: {city.clouds}</h2>
                        <h2>Latitude: {city.latitud}º</h2>
                        <h2>Length: {city.longitud}º</h2>
                        <Link to="/home"><button className={style.btn}>HOME</button></Link>
                    </div>
            </div>
        </div>
    )
}