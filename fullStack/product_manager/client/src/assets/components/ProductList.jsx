import React from 'react';
import axios from 'axios';

const ProductList = (props) => {
    const products = props.products;
    const { removeFromDom } = props;


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {products.map((product, i) => (
                <p key={i}>
                    <a href={`http://localhost:5173/products/${product._id}`}>
                        {product.title}
                    </a>
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>

            ))}
        </div>
    )
}

export default ProductList;
