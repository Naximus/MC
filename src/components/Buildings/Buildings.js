import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './buildings.scss';

import { calculateRoomsCount, calculateOfficesCount, calculateDevicesCount } from '../../utils/buildingUtils.js';

import {  BuildingIcon, AddressIcon, IconFloors, IconOffices, IconRooms, IconDevices, IconArrowNext} from '../../utils/icons';
import iconEdit from '../../assets/appearance_icons/icon_edit.png'

const Buildings = ({
    id,
    name,
    address,
    onlineDevices,
    floors
}) => {

const navigate = useNavigate();

const roomsCount = useMemo(() => calculateRoomsCount(floors), [floors]);
const officesCount = useMemo(() => calculateOfficesCount(floors), [floors]);
const devicesCount = useMemo(() => calculateDevicesCount(floors), [floors]);


  return (
    <div id='bulding-container'>
        <BuildingIcon className="buildingIcon icon-building" />
        <div className='main-info'>
          <h2>{name}</h2>
          <div className='adress-holder'>
          <AddressIcon className="icons-style" />
            <h3>{address}</h3>
          </div>
          <div className='divider'></div>
          <div className='extra-info'>
            <div className='info-icons'>
                <div className='info-icons-styles'>
                  <IconFloors className="icons-style" />
                  <p>Floors: </p>
                  <p>{floors.length}</p>
                </div>
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
                <div className='info-icons-styles'>
                  <IconDevices className="icons-style" />
                  <p>Devices: </p>
                  <p>{devicesCount}</p>
                </div>
                <div className='info-icons-styles'>
                 <div className='cirlce-green'></div>
                  <p>Online devices: </p>
                  <p>{onlineDevices}</p>
                </div>
            </div>
            <div onClick={() => {
              navigate(`/buildings/${id}`, { state: {
                id,
                name,
                address,
                onlineDevices,
                floors,
                officesCount,
                roomsCount,
                devicesCount
              }});
          }}><IconArrowNext className="icons-style cursor-pointer" /></div>

          </div>
          
        </div>
        <img className="icon-edit" src={iconEdit} alt="iconEdit"/>
    </div>
  )
}

export default Buildings;