

import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top pt-4 pb-4">
      <div className="container">
        <Link to={"/"} className="navbar-brand text-white fw-bolder text-uppercase fs-2">
          Start Framework
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar