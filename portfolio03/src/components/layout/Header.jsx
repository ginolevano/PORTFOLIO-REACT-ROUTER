import React from 'react'
import { NavLink ,Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        
        <header
        className="header"

        >
            
            <div
            className="header__cont"
            >

                        <div
                        className="header__logo"
                        >
                            <span> 
                                G
                            </span>
                            <h3
                            className="header__text"
                            >
                            Gino Levano Web 
                            </h3>       
                        </div>


                        <nav>
                            <ul
                            className='header__ul'

                            >
                                <li>
                                    <NavLink 
                                    className={
                                        ({isActive})=> (isActive)? "activo" : ""
                                    }
                                    to="/inicio">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    className={
                                        ({isActive})=> (isActive) ? "activo" : ""
                                    }
                                    to="/portafolio">Portafolio</NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    className={
                                        ({isActive}) =>{
                                            return isActive ? "activo" : ""
                                        }
                                    }
                                    to="/servicios">Servicios</NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    className={
                                        ({isActive}) => isActive? "activo" : ""
                                     }
                                    to="/curriculum">C.V</NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    className={
                                        ({isActive}) =>{
                                            return isActive ? "activo" : ""
                                        }
                                    }
                                    to="/contacto">Contacto</NavLink>
                                </li>
                            </ul>
                        </nav>

            </div>

            <div>
                <Outlet/>
            </div>

        </header>

    </div>
  )
}
