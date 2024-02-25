import { useState, useEffect } from 'react'
import ManagePlayers from '../views/ManagePlayers'
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import ManageStatus from '../views/ManageStatus'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect((() => {
    navigate('/players/list');
  }), []);


  return (
    <>
      <div className="card p-3">
        <h5 className='card-title d-flex justify-content-around'>
          <Link className={`${location.pathname.includes("players") ? "text-success" : ""}`} to={'/players/list'} >Manage Players</Link>
          <Link className={location.pathname.includes("status") ? "text-success" : ""} to={'/status/game/1'} >Manage Player Status</Link>
        </h5>
        <div className="card-body">
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
