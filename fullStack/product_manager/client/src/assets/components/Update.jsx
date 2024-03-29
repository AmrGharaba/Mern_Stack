import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const { title, price, description } = res.data.product;
                setTitle(title);
                setPrice(price);
                setDesc(description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDesc(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Update;
