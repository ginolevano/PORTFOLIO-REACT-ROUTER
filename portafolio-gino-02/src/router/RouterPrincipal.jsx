import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Portafolio } from "../components/Portafolio"
import { Servicios } from "../components/Servicios"
import { Contacto } from '../components/Contacto'
import { Error } from "../components/Error"
import {Header} from "../components/layout/Header"
import {Footer} from "../components/layout/Footer"
import {Proyecto} from "../components/Proyecto"

export const RouterPrincipal = () => {
  return (
    <div>

    <BrowserRouter>

        <Header/>
    
        <section
        className="content__routes"
        >
        <Routes>
            <Route path="/" element={ <Inicio/> } />
            <Route path="/inicio" element={ <Inicio/> } />
            <Route path="/portafolio" element={ <Portafolio/> } />
            <Route path="/servicios" element={ <Servicios/> } />
            <Route path="/curriculum" element={ <Curriculum/> } />
            <Route path="/contacto" element={ <Contacto/> } />
            <Route path="/proyecto/:id"  element={<Proyecto/>}/>
            <Route path="/*"  element={ <Error/> }/>
        </Routes>
        </section>

        <Footer/>
    </BrowserRouter>

    </div>
  )
}
