import React, { useMemo, useState } from "react";
import '../Floors/floors.scss';
import { useNavigate, useLocation  } from 'react-router-dom';


import iconArrowBack from '../../../assets/navigation_icons/2849832_arrows_navigation_arrow_left_back_icon.svg';
import iconOffices from '../../../assets/appearance_icons/icon_appartment.svg';
import iconRooms from '../../../assets/appearance_icons/icon_door.svg';
import iconBuilding from '../../../assets/appearance_icons/commercial-building.svg';

import { ReactComponent as FloorIcon } from '../../../assets/appearance_icons/icon_floor.svg';


import AllDevices from "../AllDevices/AllDevicesNav";
import ManageDevices from "../ManageDevices/ManageDevicesNav";
import UserManagement from "../UserManagement/UserManagementNav";
import OfficessNav from "../Officess/OfficessNav";

const Floor = () => {
    const [activeTab, setActiveTab] = useState("officess");

    const navigate = useNavigate();
    const location = useLocation();
    
    const floor = location.state ? location.state.floor : null;
    const buildingName = location.state.buildingData.name;
    const currentFloor = floor;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    
      const roomsCount = useMemo(() => {
        return currentFloor.rooms ? currentFloor.rooms.length : 0;
    }, [currentFloor]);
    
    const officesCount = useMemo(() => {
        return currentFloor.offices ? currentFloor.offices.length : 0;
    }, [currentFloor]);


    if (!floor) {
        return <p>There are no devices assigned to this building.</p>;
    }

    return (
        <div className="floor-holder">
            <div className='building-details-header '> 
                <div className='back-button' onClick={() => navigate(-1)}>
                <img className='arrow' src={iconArrowBack} />
                <p>Back</p> 
                </div>
                <button className="primery-btn add-btn-building"><p>Edit floor </p></button>
            </div>

            <h2>Floor dashboard</h2>
            <div className='bulding-details-container'>
                {/* <div className='icon-floors'></div> */}
                <FloorIcon className="buildingIcon icon-floors" />
                <div className='main-info-details'>
                <h2>{floor.name}</h2>
                <div className='adress-holder'>
                <img className="icons-style" src={iconBuilding} />
                    <h3>{buildingName}</h3>
                </div>
                <div className='extra-info'>
                    <div className='info-icons'>
                        <div className='info-icons-styles'>
                        <img className="icons-style" src={iconOffices} />
                        <p>Offices: </p>
                        <p>{officesCount}</p>
                        </div>
                        <div className='info-icons-styles'>
                        <img className="icons-style" src={iconRooms} />
                        <p>Rooms: </p>
                        <p>{roomsCount}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='dashboard-nav'>
                <div className={activeTab === "devices" ? "active-link" : ""} 
                onClick={() => handleTabClick("devices")}> <p>All Devices</p></div>

                <div className={activeTab === "officess" ? "active-link" : ""}
                onClick={() => handleTabClick("officess")}> <p>Officess</p></div>

                <div className={activeTab === "manage" ? "active-link" : ""}
                onClick={() => handleTabClick("manage")}> <p>Manage Devices</p></div>

                <div className={activeTab === "user" ? "active-link" : ""}
                onClick={() => handleTabClick("user")}> <p>User Management</p></div>
            </div>


            <div className='current-dashboard-info'>
                { activeTab === "devices" && <div><AllDevices /></div> }
                { activeTab === "officess" && <div><OfficessNav floor = { floor } /></div> }
                { activeTab === "manage" && <div><ManageDevices /></div> }
                { activeTab === "user" && <div><UserManagement /></div> }
            </div>

      </div>
    )

}


export default Floor;