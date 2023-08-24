import React, { useEffect } from 'react';
import './home.scss';
import buildings from '../../data/buildings';
import Building from '../Building/Building';
import { Link } from 'react-router-dom';

const Home = () => {

  // useEffect(()=>
  //   {
      
  //   }, []);

  return (
    <div>
      <div>Home Header</div>
      <div> 
      <Link to={`/login`} className="button">Login</Link>
      </div>
      <div id='buldings-list'>
        {buildings.map(x =>
                <Building key={x.id} {...x} />
            )}
      </div>
    </div>
  )
}


export default Home;