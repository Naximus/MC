import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home/Home';
import Buildings from './components/Buildings/Buildings';
import Login from './components/Login/Login';
import BuildingDetails from './components/BuildingDetail/BuildingDetails';
import TokenContext from './contexts/TokenContext';





function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  
  return (
    <div id='main-container'>
      <TokenContext.Provider value={{token, setToken}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/buildings/:id' element={<BuildingDetails />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
