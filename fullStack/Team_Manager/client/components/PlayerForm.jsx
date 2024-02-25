import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PlayerForm() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createPlayer = (e) => {
        const game1 = 0;
        const game2 = 0;
        const game3 = 0;
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            name, position, game1, game2, game3,
        })
            .then(res => {
                console.log(res);
                navigate('/players/list')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        setName("");
        setPosition("");
    }
    return (
        <div className="card" style={{ width: '35rem ' }}>
            <div className="card-body">
                <h5 className="card-title ">Add player</h5>
                <form >
                    <div className="mb-3">
                        <label htmlFor="PtoductTitle" className="form-label">Player's name</label>
                        <input type="text" className="form-control" id="AuthorName" aria-describedby="nameHelp" onChange={(e) => setName(e.target.value)} value={name}></input>
                        {errors.map((err, index) => <small id="nameHelp" className="form-text text-danger " key={index}>{err}</small>)}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PtoductTitle" className="form-label">Position</label>
                        <input type="text" className="form-control" id="AuthorName" aria-describedby="nameHelp" onChange={(e) => setPosition(e.target.value)} value={position}></input>
                    </div>
                    <div className="mb-3 text-center" >
                        <Link to={`/players/list`}><button type="button" className="btn btn-sm btn-warning me-2" >Cancell</button></Link>
                        <button type="submit" onClick={createPlayer} className="btn btn-sm btn-primary " disabled={name.length < 2} >Submit</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default PlayerForm