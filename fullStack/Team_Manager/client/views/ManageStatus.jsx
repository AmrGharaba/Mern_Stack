import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PlayerStatus from '../components/PlayerStatus';
import { useLocation, Link, Route, Routes } from 'react-router-dom';

function ManageStatus() {

    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [gameId, setGameId] = useState(1);
    const location = useLocation();



    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                console.log(res.data);
                setPlayers(res.data.Players);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <>
            <div className="card">
                <h6 className="card-title d-flex justify-content-center pt-2 ">Player's  Game-{gameId} status</h6>

                <div className="card-header d-flex justify-content-start gap-3">
                    <Link className={location.pathname.includes('game/1') ? "text-success" : ""} to={'/status/game/1'}>Game 1</Link>
                    <Link className={location.pathname.includes('game/2') ? "text-success" : ""} to={'/status/game/2'}>Game 2</Link>
                    <Link className={location.pathname.includes('game/3') ? "text-success" : ""} to={'/status/game/3'}>Game 3</Link>
                </div>
                <div className="card-body">
                    <Routes>
                        <Route element={loaded && <PlayerStatus players={players} setPlayers={setPlayers} loaded={loaded} gameId={gameId} setGameId={setGameId} />} path='/game/:id'></Route>
                    </Routes>


                </div>
            </div>
        </>
    )
}

export default ManageStatus