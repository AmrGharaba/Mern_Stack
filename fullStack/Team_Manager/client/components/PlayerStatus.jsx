import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlayerStatus(props) {
    const { players, setPlayers, loaded, gameId, setGameId } = props;
    const statusString = ['Undecided', 'Playing', 'not Playing'];
    const game = useParams();

    useEffect(() => {
        setGameId(game.id);
    }, [game.id, setGameId]);

    const handleStatus = (status, playerId) => {
        const statusUpdate = {
            [`game${game.id}`]: status,
        };

        axios.patch(`http://localhost:8000/api/players/${playerId}`, statusUpdate)
            .then(res => {
                const updatedPlayers = players.map(player => {
                    if (player._id === playerId) {
                        return { ...player, [`game${game.id}`]: status };

                    }
                    return player;
                });
                setPlayers(updatedPlayers);
            })
            .catch(err => console.log(err));
    };

    return (
        <table className="table" style={{ width: '35rem' }}>
            <thead>
                <tr>
                    <th scope="col">Player Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {!loaded ? <p>loading</p> :
                    players.map(player => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{statusString[player[`game${game.id}`]]}</td>
                            <td className='d-flex justify-content-start gap-3'>
                                <button onClick={() => handleStatus(1, player._id)} className={`btn btn-sm ${player[`game${game.id}`] === 1 ? 'btn-success' : 'btn-light'}`}>Playing</button>
                                <button onClick={() => handleStatus(0, player._id)} className={`btn btn-sm ${player[`game${game.id}`] === 0 ? 'btn-warning' : 'btn-light'}`}>Undecided</button>
                                <button onClick={() => handleStatus(2, player._id)} className={`btn btn-sm ${player[`game${game.id}`] === 2 ? 'btn-danger' : 'btn-light'}`}>Not Playing</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default PlayerStatus;
