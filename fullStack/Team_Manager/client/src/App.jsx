import { useState, useEffect } from 'react'
import ManagePlayers from '../views/ManagePlayers'
import { Route, Routes, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import PlayerForm from '../components/PlayerForm'
import ManageStatus from '../views/ManageStatus'

function App() {
  const navigate = useNavigate();

  useEffect((() => {
    navigate('/players/list');
  }), []);


  return (
    <>
      <div className="card p-3">
        <div className="card-body">
          <h5 className="card-title mb-5 d-flex justify-content-around  "><Link to={'/players/list'} >Manage Players</Link><Link to={'/status/game/1'} >Manage Player Status</Link></h5>
          <Routes>
            <Route element={<ManagePlayers />} path="/players/*" />
            <Route element={<ManageStatus />} path="/status/*" />
          </Routes>
        </div>
      </div>
    </>

  );
}

export default App
