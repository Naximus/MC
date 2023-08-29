import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home/Home';
import Buildings from './components/Buildings/Buildings';
import Login from './components/Login/Login';
import BuildingDetails from './components/BuildingDetail/BuildingDetails';
import Floor from './components/BuildingDetail/Floors/Floor';

import store from './store/store.js';
import { Provider, useDispatch, useSelector } from "react-redux";
import { setToken as setReduxToken } from "./utils/tokenSlice";


function App() {

  return (
    <Provider store={store}> 
      <MainComponent />
    </Provider>
  );
}

function MainComponent() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.value);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      dispatch(setReduxToken(storedToken));
    }
  }, [dispatch]);

  return (
    <div id='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buildings' element={ token === "" ? <Navigate to="/"  /> :  <Buildings /> } />
          <Route path='/buildings/:id' element={token === "" ? <Navigate to="/"  /> :  <BuildingDetails /> } />
          <Route path='/floor/:floorId' element={token === "" ? <Navigate to="/"  /> :  <Floor /> } />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}


export default App;
