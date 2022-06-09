import React from "react";
import style from "./About.module.css"
import Nav from "./Nav";

//creo el componente funcional About que se mostrará en la ruta /about
export default function About() {

    return (
        <div>
            <Nav></Nav>
            <br></br>
            <br></br>
            <h3><b>Matías Ramira</b>  - <b>Full Stack Developer</b></h3>
            <h4 className={style.description}> Soy desarrollador Full Stack con orientación al Back-end y estudiante de ingeniería en informática. Tengo 22 años y vivo en Argentina.</h4>
            <br></br>
            <h4> Si te interesa conocer más sobre mí... </h4>
            <a className={style.link} href="https://www.linkedin.com/in/matiasramira/" target="_blank">
                <h4> Linkedin </h4>
            </a>
            <a className={style.link} href="https://github.com/ramira10/" target="_blank">
                <h4> GitHub </h4>
            </a>

        </div>

    )
}