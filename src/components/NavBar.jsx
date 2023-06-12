import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar-expand-lg bg-dark'>
        <p className="display-5 text-light text-center pt-2">Simple ToDos App with Context Api and Hook useReducer</p>
        <div className="container-fluid text-light pt-4 pb-2">
            <a href="" className="navbar-brand"></a>
        </div>
    </nav>
  )
}

export default NavBar