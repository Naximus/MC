import React from "react";

import iconBuilding from '../../../assets/appearance_icons/add-a-device.png';

const OfficessNav = ({ 
    floor
}) => {
    const offices = floor.offices;


    return (
        <div className="info-floor-nav">
            <div className="main-info-holder">
                {offices.length === 0 ? (
                    <p>There are no floors assigned to this building.</p>
                ) : (
                    <div className="floors-holder">
                        {offices.map(office => (
                            <img 
                                key={office.id} 
                                className="add-building-icon" 
                                src={iconBuilding} 
                                alt={`Icon for ${office.name}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
    
}


export default OfficessNav;