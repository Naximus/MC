import React, { useEffect } from 'react';
import './home.scss';
import buildingsData from '../../data/buildingsData';
import Buildings from '../Buildings/Buildings';
import { Link } from 'react-router-dom';

const Home = () => {

  // useEffect(()=>
  //   {
      
  //   }, []);

  return (
    <div>
      <div id="home-header">
        <h1>Home Header</h1>
        <button className="primery-btn"><div className='icon-add'></div><p>Create new building </p></button>
        <div> 
          <Link to={`/login`} className="button">Login</Link>
        </div>
      </div>
      
      
      <div id='buldings-list'>
        {buildingsData.map(x =>
                <Buildings key={x.id} {...x} />
            )}
      </div>
    </div>
  )
}


export default Home;