import React, { useMemo } from 'react'
import './buildings.scss';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as BuildingIcon } from '../../assets/appearance_icons/commercial-building.svg';


import iconAdress from '../../assets/appearance_icons/352521_location_on_icon.svg'
import iconEdit from '../../assets/appearance_icons/icon_edit.png'
import iconFloors from '../../assets/appearance_icons/icon_floor.svg'
import iconOffices from '../../assets/appearance_icons/icon_appartment.svg'
import iconRooms from '../../assets/appearance_icons/icon_door.svg'
import iconDevices from '../../assets/appearance_icons/2317836_chip_computer_cpu_device_frequency_icon.svg'
import iconArrowNext from '../../assets/navigation_icons/2849833_arrows_navigation_forward_arrow_right_icon.svg'

const Buildings = ({
    id,
    name,
    address,
    onlineDevices,
    floors
}) => {

  const navigate = useNavigate();
  // console.log(floors);
  const roomsCount = useMemo(
    () => {
      let count = 0;
      floors.map( floor => {
        if(floor.rooms && floor.rooms.length > 0) {
          count += floor.rooms.length;
        }
      })
      return count;
    },
    [floors]
  );

  const officesCount = useMemo(
    () => {
      let count = 0;
      floors.map( floor => {
        if(floor.offices && floor.offices.length > 0) {
          count += floor.offices.length;
        }
      })
      return count;
    },
    [floors]
  );

  const devicesCount = useMemo(
    () => {
      let count = 0;
      floors.map( floor => {
        if(floor.offices && floor.offices.length > 0) {
          floor.offices.map( office => {
            if(office.devices && office.devices.length > 0) {
              count += office.devices.length;
            }
          });
        }

        if(floor.rooms && floor.rooms.length > 0) {
          floor.rooms.map( room => {
            if(room.devices && room.devices.length > 0) {
              count += room.devices.length;
            }
          });
        }
      })
      return count;
    },
    [floors]
  );


  return (
    <div id='bulding-container'>

        {/* <div className='icon-building'></div> */}
        <BuildingIcon className="buildingIcon icon-building" />


        <div className='main-info'>
          <h2>{name}</h2>
          <div className='adress-holder'>
          <img className="icons-style" src={iconAdress} />
            <h3>{address}</h3>
          </div>
          <div className='divider'></div>
          <div className='extra-info'>
            <div className='info-icons'>
                <div className='info-icons-styles'>
                  <img className="icons-style" src={iconFloors} />
                  <p>Floors: </p>
                  <p>{floors.length}</p>
                </div>
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
                <div className='info-icons-styles'>
                  <img className="icons-style" src={iconDevices} />
                  <p>Devices: </p>
                  <p>{devicesCount}</p>
                </div>
                <div className='info-icons-styles'>
                 <div className='cirlce-green'></div>
                  <p>Online devices: </p>
                  <p>{onlineDevices}</p>
                </div>
            </div>
            {/* <Link to={`/buildings/${id}`} >Details</Link> */}
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
          }}><img className="icons-style cursor-pointer" src={iconArrowNext} /></div>

          </div>
          
        </div>
        <img className="icon-edit" src={iconEdit} />
    </div>
  )
}

export default Buildings;