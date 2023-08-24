import React from 'react';
import './home.scss';
import buildings from '../../data/buildings';
import Building from '../Building/Building';

const Home = () => {
  return (
    <div>
      <div>Home Header</div>
      <div id='buldings-list'>{buildings.map(x =>
                <Building key={x._id} {...x} />
            )}
      </div>
    </div>
  )
}


export default Home;