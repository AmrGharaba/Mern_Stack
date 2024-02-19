import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.product);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Product title: {product.title}</p>
                    <p>Product price: {product.price}</p>
                    <p>Product description: {product.description}</p>
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                </>
            )}
        </div>
    );
}

export default Detail;
