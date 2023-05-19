import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Banner from './components/Banner.js';
import Appartement from './components/Appartement.js';

function App() {
  return (
    <div>
    <Navbar />
    <Banner />
    <Appartement />
    </div>
    
  )
}

export default App