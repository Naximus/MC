import React from "react";
import { useNavigate, useLocation  } from 'react-router-dom';
import iconArrowBack from '../../../assets/navigation_icons/2849832_arrows_navigation_arrow_left_back_icon.svg'

const Floor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const floor = location.state ? location.state.floor : null;
    const buildingName = location.state.buildingName;

    if (!floor) {
        return <p>There are no devices assigned to this building.</p>;
    }

    return (
        <div>
            <div className='building-details-header '> 
                <div className='back-button' onClick={() => navigate(-1)}>
                <img className='arrow' src={iconArrowBack} />
                <p>Back</p> 
                </div>
                <button className="primery-btn add-btn-building"><p>Edit building </p></button>
            </div>
            <h2>{floor.name}</h2>
            <h2>{buildingName}</h2>
      </div>
    )

}


export default Floor;