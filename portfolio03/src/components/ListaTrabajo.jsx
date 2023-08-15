import React from 'react'
import { NavLink } from 'react-router-dom'
import { trabajos } from "../data/trabajos"

export const ListaTrabajo = ({limite}) => {
    return (
    <div>


<div>
          <div
          className="portafolio"
          >

            
            <section
            className="portafolio__cont"
            >
            {
              trabajos.slice(0,limite).map(trabajos=>{
                return(
                  <article
                  className="portafolio__article"
                  key={trabajos.id}
                  >
                    <div
                    className="portafolio__imgcont"
                    >
                      <img src={"/assets/" + trabajos.id + ".png"} loading="lazy"  alt={trabajos.alt} />
                    </div>
                    <span>{trabajos.categorias}</span>
                    <h2>
                      <NavLink
                      to={"/proyecto/" + trabajos.id}
                      >
                      {trabajos.nombre}
                      </NavLink>

                    </h2>
                    <h3>
                      {trabajos.tecnologias}
                    </h3>
                  </article>
                )
              })
            }
              
            

            </section>
          </div>
        </div>

    </div>
  )
}
