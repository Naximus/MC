import React, { useState } from 'react';
import '../BuildingDetail/buildingDetails.scss';
import {  useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import {  BuildingIcon, AddressIcon, IconFloors, IconOffices, IconRooms, IconArrowBack} from '../../utils/icons';

import Floors from './Floors/FloorsNav';
import AllDevices from './AllDevices/AllDevicesNav';
import Apartments from './Apartments/ApartmentsNav';
import Rooms from './Rooms/RoomsNav';
import ManageDevices from './ManageDevices/ManageDevicesNav';
import UserManagement from './UserManagement/UserManagementNav';



const BuildingDetails = () => {
    
    const [activeTab, setActiveTab] = useState("floors");

    const navigate = useNavigate();

    const location = useLocation();
    const buildingData = location.state;

    const handleGoHome = () => {
      navigate('/'); 
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div id='building-details'>
      <div className='building-details-header '> 
        <div className='back-button' onClick={handleGoHome}>
          <IconArrowBack className="arrow" />
          <p>Back</p> 
         </div>
         <button className="primery-btn add-btn-building"><p>Edit building </p></button>
      </div>
      <h2>Building dashboard</h2>
      <div className='bulding-details-container'>
        <BuildingIcon className="buildingIcon icon-building" />
        <div className='main-info-details'>
          <h2>{buildingData.name}</h2>
          <div className='adress-holder'>
            <AddressIcon className="icons-style" />
            <h3>{buildingData.address}</h3>
          </div>
          <div className='extra-info'>
            <div className='info-icons'>
                <div className='info-icons-styles'>
                  <IconFloors className="icons-style" />
                  <p>Floors: </p>
                  <p>{buildingData.floors.length}</p>
                </div>
                <div className='info-icons-styles'>
                  <IconOffices className="icons-style" />
                  <p>Offices: </p>
                  <p>{buildingData.officesCount}</p>
                </div>
                <div className='info-icons-styles'>
                  <IconRooms className="icons-style" />
                  <p>Rooms: </p>
                  <p>{buildingData.roomsCount}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div className='devices-info-holder'>
            <div className='devices'>
              <p>Online Devices</p>
              <div className='active-holder'>
                <div className='cirlce-green'></div>
                <p>{buildingData.onlineDevices}</p>
              </div>
            </div>
            <div className='devices'>
              <p>Online Devices</p>
              <div className='active-holder'>
                <p>{buildingData.onlineDevices}</p>
              </div>
            </div>
    </div>
{/* ---------------------- */}
<div>
    <div className='dashboard-nav'>
      <div className={activeTab === "devices" ? "active-link" : ""} 
      onClick={() => handleTabClick("devices")}> <p>All Devices</p></div>

      <div className={activeTab === "floors" ? "active-link" : ""}
       onClick={() => handleTabClick("floors")}> <p>Floor</p></div>

      <div className={activeTab === "apartments" ? "active-link" : ""}
       onClick={() => handleTabClick("apartments")}> <p>Apartments</p></div>

      <div className={activeTab === "rooms" ? "active-link" : ""}
       onClick={() => handleTabClick("rooms")}> <p>Rooms</p></div>

      <div className={activeTab === "manage" ? "active-link" : ""}
       onClick={() => handleTabClick("manage")}> <p>Manage Devices</p></div>

      <div className={activeTab === "user" ? "active-link" : ""}
       onClick={() => handleTabClick("user")}> <p>User Management</p></div>
    </div>
    <div className='current-dashboard-info'>
      { activeTab === "devices" && <div><AllDevices /></div> }
      { activeTab === "floors" && <div><Floors buildingData = { buildingData } /></div> }
      { activeTab === "apartments" && <div><Apartments /></div> }
      { activeTab === "rooms" && <div><Rooms /></div> }
      { activeTab === "manage" && <div><ManageDevices /></div> }
      { activeTab === "user" && <div><UserManagement /></div> }
      
    </div>
  </div>
{/* ---------------------- */}


    </div>
  )
}

export default BuildingDetails;