import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import buildingsData from '../../data/buildingsData';
import Buildings from '../Buildings/Buildings';
import TokenContext from '../../contexts/TokenContext';

const Home = () => {

  const { token, setToken } = useContext(TokenContext);

  // useEffect(()=>
  //   {
      
  //   }, []);

  return (
    <div className='home-page '>
      {token ? (
        <>
          <div id="home-header">
            <h1>Home Header</h1>
            <button className="primery-btn"><div className='icon-add'></div><p>Create new building </p></button>
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