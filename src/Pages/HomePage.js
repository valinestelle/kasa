import React from 'react';
import './HomePage.scss';
import Banner from '../components/Banner.js';
import Appartement from '../components/Appartement.js';


function HomePage() {
  return (
    <div>
    <main>
    <Banner />
    <Appartement />
    </main>
    </div>   
  )
}

export default HomePage