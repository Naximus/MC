import React from 'react'
import './buildings.scss';
import { Link } from 'react-router-dom';

import iconAdress from '../../assets/appearance_icons/352521_location_on_icon.svg'

const Buildings = ({
    id,
    name,
    address
}) => {
  return (
    <div id='bulding-container'>
        <div className='icon-building'></div>
        <div className='main-info'>
          <h2>{name}</h2>
          <div className='adress-holder'>
          <img className="icon-adress" src={iconAdress} />
            <h3>{address}</h3>
          </div>
          
        </div>
        <Link to={`/buildings/${id}`} >Details</Link>
    </div>
  )
}

export default Buildings;