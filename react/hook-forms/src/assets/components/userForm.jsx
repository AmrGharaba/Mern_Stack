import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <>
            <form onSubmit={createUser}>

                <div className="row mb-3">
                    <label htmlFor="firstName" className="col-auto col-form-label">First Name:</label>
                    <div className="col-auto">
                        <input type="text" id='firstName' className="form-control" onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="lasttName" className="col-auto col-form-label">Last Name:</label>
                    <div className="col-auto">
                        <input type="text" id='lastName' className="form-control" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="email" className="col-auto col-form-label">Email:</label>
                    <div className="col-auto">
                        <input type="email" id='email' className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="password" className="col-auto col-form-label">Password:</label>
                    <div className="col-auto">
                        <input type="password" id='password' className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-auto col-form-label">Confirm Password:</label>
                    <div className="col-auto">
                        <input type="password" id='confirmPassword' className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                <input type="submit" value="Create User" className="btn btn-primary" />
            </form>
            <div className='mt-4'>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
            </div>

        </>


    );
};

export default UserForm;
