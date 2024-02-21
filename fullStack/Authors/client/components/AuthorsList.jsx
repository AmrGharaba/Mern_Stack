import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'


function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res);
                setAuthors(res.data.Authors);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        setAuthors(authors.filter(author => author._id != authorId))


    }

    return (
        <>
            <div>
                <Link to={'/authors/new'}>Add an author</Link>
            </div>
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions Available</th>

                        </tr>
                    </thead>
                    <tbody>
                        {!loaded ? <tr><td>loading...</td></tr> : authors.map((author, idx) => (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/authors/${author._id}/edit`}><button type="button" className="btn btn-sm btn-primary me-2" >Edit</button></Link>
                                    <button type="button" onClick={e => { deleteAuthor(author._id) }} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AuthorsList