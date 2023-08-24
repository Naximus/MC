import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.scss';
import Home from './components/Home/Home';
import Building from './components/Building/Building';
import Login from './components/Login/Login';





function App() {
  const [token, setToken] = useState("");
  
  return (
    <div id='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/building' element={<Building />} />
          <Route path='/login' element={<Login setToken = { setToken } token = { token }/>} />
        </Routes>
    </div>
  );
}

export default App;
