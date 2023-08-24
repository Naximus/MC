import { Routes, Route } from 'react-router-dom';


import './App.scss';
import Home from './components/Home/Home';
import Building from './components/Building/Building';


function App() {
  return (
    <div id='main-container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/building' element={<Building/>} />

        </Routes>
    </div>
  );
}

export default App;
