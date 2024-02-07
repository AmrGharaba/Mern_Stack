import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setfirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be atleast 2 characters");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be atleast 2 characters");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailError("Email must be atleast 2 characters");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 8) {
            setPasswordError("password must be atleast 8 characters");
        }
        else {
            setPasswordError("");
        }
        if (confirmPassword !== password) {
            console.log(password);
            console.log(confirmPassword);
            setConfirmPasswordError("passwords must match")
        }
        else {
            setConfirmPasswordError("");
        }
        console.log(password);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmPassword !== password) {
            console.log(password);
            console.log(confirmPassword);
            setConfirmPasswordError("passwords must match")
        }
        else {
            setConfirmPasswordError("");
        }

    }


    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setfirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")


    };

    return (
        <>
            <form onSubmit={createUser}>

                <div className="row mb-3">
                    <label htmlFor="firstName" className="col-auto col-form-label">First Name:</label>
                    <div className="col-auto">
                        <input type="text" id='firstName' className="form-control" onChange={handleFirstName} />
                        <p>{firstNameError}</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="lasttName" className="col-auto col-form-label">Last Name:</label>
                    <div className="col-auto">
                        <input type="text" id='lastName' className="form-control" onChange={handleLastName} />
                        <p>{lastNameError}</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="email" className="col-auto col-form-label">Email:</label>
                    <div className="col-auto">
                        <input type="email" id='email' className="form-control" onChange={handleEmail} />
                        <p>{emailError}</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="password" className="col-auto col-form-label">Password:</label>
                    <div className="col-auto">
                        <input type="password" id='password' className="form-control" onChange={handlePassword} />
                        <p>{passwordError}</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-auto col-form-label">Confirm Password:</label>
                    <div className="col-auto">
                        <input type="password" id='confirmPassword' className="form-control" onChange={handleConfirmPassword} />
                        <p>{confirmPasswordError}</p>
                    </div>
                </div>

                <input type="submit" value="Create User" className="btn btn-primary" />
            </form>


        </>


    );
};

export default UserForm;
