import React from 'react'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserForm(props) {
    const { name, setName } = props
    useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <div className="card" style={{ width: '35rem ' }}>
            <div className="card-body">
                <h5 className="card-title ">Enter Name to start chatting !!</h5>
                <form >
                    <div className="mb-3">
                        <label htmlFor="PtoductTitle" className="form-label">Enter Name</label>
                        <input type="text" className="form-control" id="AuthorName" aria-describedby="nameHelp" onChange={(e) => setName(e.target.value)} value={name}></input>
                    </div>

                    <div className="mb-3 text-center" >
                        <Link to={`/App`}><button type="button" className="btn btn-sm btn-warning me-2" >Enter</button></Link>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default UserForm