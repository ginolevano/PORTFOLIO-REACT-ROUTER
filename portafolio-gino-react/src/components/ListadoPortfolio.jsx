import React from 'react'
import { NavLink } from 'react-router-dom'
import {trabajos} from "../data/trabajos"

export const ListadoPortfolio = ({limite}) => {
  return (
      
    <div
    >
        <div
        className="portafolio"
        >
        <section
        className="portafolio__cont"
        >
            
        {
            trabajos.slice(0,limite).map(portfolio=>{
                return(
                    <article
                    className="portafolio__article"
                    key={portfolio.id}
                    >   
                        <NavLink 
                        to={"/proyecto/" + portfolio.id}>

                        <div
                        className="portafolio__imgcont"
                        >
                            <img src={"/assets/" + portfolio.id + ".png"} alt={portfolio.alt} />
                        </div>
                        
                        <h2>{portfolio.nombre}</h2>
                        <h3>{portfolio.tecnologias}</h3>
                        <span>
                        {portfolio.categorias}
                        </span>

                        </NavLink>
                    </article>

                )
            })
        }
        </section>
        </div>
    </div>
  )
}
