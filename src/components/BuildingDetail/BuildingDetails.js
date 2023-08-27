import React, { useEffect, useState } from 'react';
import '../BuildingDetail/buildingDetails.scss';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import buildingsData from '../../data/buildingsData';





const BuildingDetails = () => {
    let { id } = useParams(); 
    const navigate = useNavigate();

    const [building, setBuilding] = useState();
    useEffect(() => {
        const building = buildingsData.filter(b => b.id === id);
        setBuilding(building);
        console.log(building);
    }, [id, buildingsData]);
    
    const handleGoHome = () => {
      navigate('/'); 
  }

  return (
    <div id='building-details'>
      <div className='building-details-header '> 
        <div className='back-button' onClick={handleGoHome}>Back</div>
          
      </div>
      <h2>Building dashboard</h2>
        <div>{id}</div>
    </div>
  )
}

export default BuildingDetails;