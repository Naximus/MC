import React from 'react'
import './buildings.scss';
import { Link } from 'react-router-dom';

const Buildings = ({
    id,
    name,
    address
}) => {
  return (
    <div id='bulding-container'>
        <div className='icon-building'></div>
        <h2>{name}</h2>
        <h3>{address}</h3>
        <Link to={`/buildings/${id}`} >Details</Link>
    </div>
  )
}

export default Buildings;