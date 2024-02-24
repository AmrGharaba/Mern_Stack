import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PlayersDisplay() {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
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

  const deletePlayer = async (player) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${player.name} ?`);
    if (confirmDelete) {
      await axios.delete(`http://localhost:8000/api/players/${player._id}`)
      setPlayers(players.filter(filtered => filtered._id != player._id))
    }
  }

  return (
    <table className="table" style={{ width: '30rem ' }}>
      <thead>
        <tr>
          <th scope="col">Player Name</th>
          <th scope="col">Position</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          !loaded ? <tr><td>loading...</td></tr> : players.map((player, idx) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td><button type="button" onClick={e => { deletePlayer(player) }} className="btn btn-sm btn-danger">Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default PlayersDisplay