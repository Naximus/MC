import React, { useEffect, useState } from 'react'
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
    
  return (
    <div>
        {/* <button onClick={()=> navigate(-1)}>Back</button> */}
        <Link to={'/'}>Back</Link>
        <div>BuildingDetails</div>
        <div>{id}</div>
    </div>
  )
}

export default BuildingDetails;