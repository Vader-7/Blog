import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/start">Inicio</NavLink></li>
        <li><NavLink to="/articles">Articulos</NavLink></li>
        <li><NavLink to="/create">Crear articulo</NavLink></li>
      </ul>
    </nav>
  )
}
