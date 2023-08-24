import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import buildings from '../../data/buildings';

const BuildingDetails = () => {
    let { id } = useParams(); 
    const navigate = useNavigate();

    const [building, setBuilding] = useState();
    useEffect(() => {
        const building = buildings.filter(b => b.id == id);
        setBuilding(building);
        console.log(building);
    }, [id, buildings]);
    
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