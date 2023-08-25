import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home/Home';
import Buildings from './components/Buildings/Buildings';
import Login from './components/Login/Login';
import BuildingDetails from './components/BuildingDetail/BuildingDetails';





function App() {
  const [token, setToken] = useState("");
  
  return (
    <div id='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/buildings/:id' element={<BuildingDetails />} />
          <Route path='/login' element={<Login setToken = { setToken } token = { token }/>} />
          
        </Routes>
    </div>
  );
}

export default App;
