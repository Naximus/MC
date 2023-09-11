import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import buildingsData from '../../data/buildingsData';
import Buildings from '../Buildings/Buildings';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { setBuildings } from '../../utils/buildingSlice.js';

const Home = () => {

  const token = useSelector(state => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBuildings(buildingsData));
}, [dispatch]);

  return (
    <div className='home-page '>
      {token ? (
        <>
          <div id="home-header">
            <div><h1>Buildings ({buildingsData.length})</h1></div>
            <button className="primery-btn"><div className='icon-add'></div><p >Create new building </p></button>
          </div>
          
          <div id='buldings-list'>
            {buildingsData.map(x =>
                    <Buildings key={x.id} {...x} />
                )}
          </div>
        </>
      ) : (
        <div className='singin-btn'> 
          <Link to={`/login`} className="button">Sign In</Link>
        </div>
      )}
    </div>
  )
}


export default Home;