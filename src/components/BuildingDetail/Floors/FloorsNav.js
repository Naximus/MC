import React from "react";
import '../Floors/floors.scss';
import { useNavigate } from 'react-router-dom';
import iconAddBuilding from '../../../assets/appearance_icons/add-a-floor.png'

const FloorsNav = ({
    buildingData,
}) => {
    const navigate = useNavigate();
    

    const floorsInfo = buildingData.floors;
    const handleFloorClick = (floor) => {
        navigate(`/floor/${floor.id}`, { state: { floor, buildingData } });
    };

    return (
        <div className="info-floor-nav">
            <div className="main-info-holder">
                <h2 className="floors-number">FLOORS ({floorsInfo.length})</h2>
                
                {floorsInfo.length === 0 ? (
                    <p>There are no floors assigned to this building.</p>
                ) : (
                    <div className="floors-holder">
                        {floorsInfo.map(floor => (
                            <img 
                                key={floor.id} 
                                className="add-building-icon" 
                                src={iconAddBuilding} 
                                onClick={() => handleFloorClick(floor)} 
                                alt={`Icon for ${floor.name}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <button className="primery-btn floor-btn"><div className='icon-add'></div><p >Create new floor </p></button>
        </div>
    )

}


export default FloorsNav;