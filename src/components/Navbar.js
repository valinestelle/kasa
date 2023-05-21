import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return <nav className='navbar'>
    <img src="logo1.png" alt="logo Kasa"/>
    <div className='liens'>
       <Link to="/">Accueil</Link>
       <Link to="/about">A propos</Link>
    </div>
    
  </nav>
}

export default Navbar