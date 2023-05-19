import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Banner from './components/Banner.js';
import Appartement from './components/Appartement.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
    <main>
    <Navbar />
    <Banner />
    <Appartement />
    </main>
    <Footer />
    </div>
    
  )
}

export default App