import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useParams } from "react-router-dom"
import { trabajos } from '../data/trabajos'


export const Proyecto = () => {

    const [ proyectoState, setProyectoState ] = useState("")

    const params = useParams()

    useEffect(()=>{
        let proyecto = trabajos.filter(trabajos => trabajos.id === params.id)
        setProyectoState(proyecto[0])
    
    },[])


    return (

    <div>

        <div
        className="proyecto__cont"
        >
                <div
                className="proyecto__width"
                >

                    <div
                    className="back"
                    >
                    <p
                    className="title__component"
                    >
                        Proyecto

                        <button

                        >
                            <NavLink 
                        className="inicio__contacto back__btn"
                        to={"/portafolio"}>
                            Back
                        </NavLink>
                        </button>
                    </p>


                    </div>
            
                    <div
                    
                    className="back__img">
                        <img 
                        src={"/assets/" + proyectoState.id  + ".png"} alt={proyectoState.alt} />
                    </div>
            
                    <h2>
                        {proyectoState.nombre}
                    </h2>
                    <p>
                        {proyectoState.descripcion}
                    </p>
            
                    <h3>
                        {proyectoState.tecnologias}
                    </h3>
            
                    <h4>
                        {proyectoState.categorias}
                    </h4>
            
                    <button>
                        <a 
                        className="inicio__contacto"
                        href={"http://" + proyectoState.url }
                        target="_blank"
                        >
                        ir al proyecto
                        </a>
                    </button>
                </div>
        </div>

    </div>

    )
}
