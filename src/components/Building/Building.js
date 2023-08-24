import React from 'react'
import './building.scss';

const Building = ({
    id,
    name,
    address
}) => {
  return (
    <div id='bulding-container'>
        <h2>{name}</h2>
        <h3>{address}</h3>
    </div>
  )
}

export default Building;