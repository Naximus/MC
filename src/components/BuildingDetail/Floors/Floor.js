import React, { useMemo, useState } from "react";
import '../Floors/floors.scss';
import { useNavigate, useLocation  } from 'react-router-dom';

import {  BuildingIcon, IconFloors, IconOffices, IconRooms, IconArrowBack} from '../../../utils/icons';





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
                <IconArrowBack className="arrow" />
                <p>Back</p> 
                </div>
                <button className="primery-btn add-btn-building"><p>Edit floor </p></button>
            </div>

            <h2>Floor dashboard</h2>
            <div className='bulding-details-container'>
                <IconFloors className="buildingIcon icon-floors" />
                <div className='main-info-details'>
                <h2>{floor.name}</h2>
                <div className='adress-holder'>
                <BuildingIcon className="icons-style" />
                    <h3>{buildingName}</h3>
                </div>
                <div className='extra-info'>
                    <div className='info-icons'>
                        <div className='info-icons-styles'>
                        <IconOffices className="icons-style" />
                        <p>Offices: </p>
                        <p>{officesCount}</p>
                        </div>
                        <div className='info-icons-styles'>
                        <IconRooms className="icons-style" />
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