import React from 'react'
import './AppartementCard.css'
import {Link} from 'react-router-dom'

function AppartementCard() {
  return (
        <article className='card'>
           <Link to= "/appartements">
            <div className='card__subtitle'>Titre de la location</div>
           </Link> 
        </article>
  )
}

export default AppartementCard