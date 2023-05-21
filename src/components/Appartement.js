import React from 'react'
import './Appartement.css'
import AppartementCard from './AppartementCard.js'


function Appartement() {
  return (
    <section className='grid'>
        <div className='cards'>
        <AppartementCard />
        <AppartementCard />
        <AppartementCard />
        <AppartementCard />
        <AppartementCard />
        <AppartementCard />
        </div>
    </section>
  )
}

export default Appartement