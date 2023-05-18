import React from 'react'
import './Navbar.css'

function Navbar() {
  return <nav className='navbar'>
    <img src="logo1.png" alt="logo Kasa"/>
    <div className='liens'>
       <p>Accueil</p>
       <p>A propos</p>
    </div>
    
  </nav>
}

export default Navbar