import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import PlayersDisplay from '../components/PlayersDisplay';


function ManagePlayers() {
    const location = useLocation([]);

    return (
        <>
            <div className="card p-3">
                <div className="card-title d-flex justify-content-start gap-3 ">
                    <Link className={location.pathname.includes('add') ? "text-success" : ""} to="/players/add">Add a Player</Link>
                    <Link className={location.pathname.includes('list') ? "text-success" : ""} to="/players/list">Players List</Link>
                </div>
                <div className="card-body">
                    <Routes>

                        <Route element={<PlayersDisplay />} path="/list" />
                        <Route element={<PlayerForm />} path="/add" />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default ManagePlayers