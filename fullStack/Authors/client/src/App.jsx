import { useState } from 'react'
import './App.css'
import AuthorsForm from '../components/AuthorsForm'
import { Route, Link, Routes } from 'react-router-dom'
import Update from '../components/Update'
import AuthorsList from "../components/AuthorsList";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const createAuthor = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors', {
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
    setName("");

  }

  return (
    <>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<AuthorsList />} path='/authors'></Route>
        <Route element={<Update />} path='/authors/:id/edit'></Route>
        <Route element={
          <>
            <h2>Add a new Author</h2>
            <AuthorsForm
              onSubmitProp={createAuthor}
              name={name}
              setName={setName}
              errors={errors} />
          </>
        }
          path='/authors/new'></Route>
      </Routes>
    </>
  )
}

export default App
