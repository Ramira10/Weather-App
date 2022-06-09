import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css"


export default function Home() {
    return (
        <div>
            <h1 className={style.title}>🌦 Weather App 🌦</h1>
            <Link to="/home"><button className={style.btn}>HOME</button></Link>
        </div>
    )
}