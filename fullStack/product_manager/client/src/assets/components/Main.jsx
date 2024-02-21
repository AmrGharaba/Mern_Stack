import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(products)
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const falseLoaded = () => {
        setLoaded(false);
    }

    return (
        <div >
            <ProductForm falseLoaded={falseLoaded} />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;

