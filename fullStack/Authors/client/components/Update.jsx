import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthorsForm from './AuthorsForm';


function Update() {
    const [name, setName] = useState("");
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.Author.name);
                setName(res.data.Author.name);
            })
            .catch(err => console.error(err));

    }, [id]);



    const updateAuthor = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, {
            name,

        })
            .then(res => {
                console.log(res);
                navigate('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.Author.name);
                setName(res.data.Author.name);
            })
            .catch(err => console.error(err));

    }

    return (
        <div>
            <h2>Update Author</h2>
            <AuthorsForm onSubmitProp={updateAuthor} name={name} setName={setName} errors={errors} ></AuthorsForm>
        </div >
    )
}

export default Update