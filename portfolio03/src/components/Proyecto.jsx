import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'



export const Proyecto = () => {
    
    const [proyectoState , setProyectoState ] = useState({})
    const params = useParams()

    useEffect(()=>{

        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id )
        setProyectoState(proyecto[0])
    },[])

    return (
    <div>
        
        <h1
        className="title__component"
        >
        Servicios
        </h1>

        <div>
            <img src={"/assets/" + proyectoState.id + ".png"} alt="" />
        </div>
        <h1>
            {proyectoState.nombre}
        </h1>
        <h2>
            {
                proyectoState.tecnologias
            }
        </h2>
        <h3>
            {
                proyectoState.categorias
            }
        </h3>
        
        <a 
        href={"http://" + proyectoState.url}
        target="_blank"
        >        
        Ir al Proyecto
        </a>

    </div>
  )
}
