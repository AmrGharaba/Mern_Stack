import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import PlayersDisplay from '../components/PlayersDisplay';

function ManagePlayers() {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-start gap-3 "><Link to="/players/add">Add a Player</Link> <Link to="/players/list">Players List</Link></h5>
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