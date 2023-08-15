import React from 'react'
import { NavLink } from 'react-router-dom'
import {ListaTrabajo} from "../components/ListaTrabajo"

export const Inicio = () => {
  return (
    <div
    className="inicio"
    >

      <div
      className="inicio__cont"
      >
                <h1
                className="inicio__h1"
                >
                    Hola soy <strong> Gino Levano </strong> y soy un Desarrollador web en Madrid y Ofrezco mis servicios 
                    de <strong>programacion </strong>  y <strong> desarrollo </strong> en todo tipo de proyectos web.
                </h1>
                
                <h2>
                    Te ayudo a crear tu sitio o aplicacion web, 
                    tener mas visibilidad y relevancia en internet
                    &nbsp;
                    <NavLink
                    className="inicio__contacto"
                    to="/contacto">
                      contacta conmigo
                    </NavLink>
                </h2>


                <section
                className="inicio__section"
                >
                    <h2>
                        Algunos de mi proyectos
                    </h2>

                    <p>Estos son algunos de mis proyectos de Desarrollo web</p>

                </section>

      </div>

      <ListaTrabajo
                limite="2"
                />

    </div>
  )
}
